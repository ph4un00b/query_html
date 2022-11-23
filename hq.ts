import {
  HTMLElement,
  Node,
  parse,
  TextNode,
} from "https://esm.sh/node-html-parser@6.1.4";
import beautify from "https://esm.sh/js-beautify@1.14.0";

export function query_html(
  query: string,
  html_data: string,
  whitespace = true,
) {
  if (_is_dot(query)) return beautify.html(html_data);

  let html: HTMLElement = parse(html_data);
  for (const expression of _commands(query)) {
    _run(expression, html);
    html = parse(html?.toString());
  }

  return _html(html, whitespace);
}

function _html(html: HTMLElement, whitespace: boolean): string {
  return whitespace
    ? beautify.html(html.removeWhitespace().toString())
    : html.removeWhitespace().toString();
}

function _run(expression: string, html: HTMLElement) {
  const [program, ...params] = expression.split(" ");
  for (const param of params) {
    if (program == "we") {
      // console.log(param.split(","));
      const [selector, tagToInsert] = param.split(",");
      /** @todo: handle undefined tagToInsert, raise some error! */
      /**
       * [
  "parentNode", "childNodes",
  "rawAttrs",   "voidTag",
  "nodeType",   "rawTagName",
  "id",         "_parseOptions",
  "classList",  "_attrs",
  "_rawAttrs"
]
       */
      // console.log(html.querySelectorAll(selector)[0])
      const elements = html.querySelectorAll(selector);
      // for (const e of elements) {
      //   console.log(e.attributes);
      // }
      // for (const e of elements) {
      //   console.log(e.attrs);
      // }
      // for (const e of elements) {
      //   console.log(e.classNames);
      // }
      // for (const e of elements) {
      //   console.log(e.rawAttributes);
      // }
      // for (const e of elements) {
      //   console.log(e.rawAttrs);
      // }
      // for (const e of elements) {
      //   console.log(e.rawTagName);
      // }
      // for (const e of elements) {
      //   console.log(e.parentNode.rawTagName);
      // }

      const nodesToReplace = [];
      for (const node of elements) {
        // console.log(node.parentNode.rawTagName);
        nodesToReplace.push(node.attributes);
      }

      // console.log({nodesToReplace})
      const selectors = []
      for (const {id, class: klass} of nodesToReplace) {
        if (id && klass) selectors.push(`[id="${id}"][class="${klass}"]`)
        else if (id) selectors.push(`[id="${id}"]`)
        else if (klass) selectors.push(`[class="${klass}"]`)
      }

      // console.log({selectors})
      for (const selector of selectors) {
        const node = html.querySelector(selector);
        if (node) {
          const child = node.clone();
          const wrapper = new HTMLElement(tagToInsert, {}, "", null, [0, 0]);
          wrapper.appendChild(child);
          node.replaceWith(wrapper);

          html.set_content(beautify.html(html?.toString()));
        }
      }
      // console.log(html.toString())
    } else if (program == "iab") {
      const [selector, tagToInsert, nodeValueOrExpression] = param.split(",");
      // todo: handle "." in raw strings, f.i. -> "hello . with . dots."
      const [_placeholder, attribute] = nodeValueOrExpression?.split(".") ?? [];
      html.querySelectorAll(selector).forEach(function (node) {
        const elementToInsert = new HTMLElement(
          tagToInsert,
          {},
          "",
          null,
          [0, 0],
        );
        const value = attribute
          ? node.getAttribute(attribute)!
          : nodeValueOrExpression;
        elementToInsert.appendChild(new TextNode(value, elementToInsert));
        node.insertAdjacentHTML("afterbegin", elementToInsert.outerHTML);
      });
      html.set_content(html?.toString());
    } else if (program == "wp") {
      _wrap_program(param, html);
    } else if (program == "img") {
      _img_program(param, html);
    } else if (program == "rm") {
      _rm_program(html, param);
    } else {
      _tag_program(html, param, program);
    }
  }
}

function _tag_program(html: HTMLElement, param: string, program: string) {
  // console.log(param.split("+"));
  // html.querySelectorAll(param).forEach(function (node) {
  // html.querySelectorAll("[id$='main_image'] [class='object']").forEach(function (node) {
  // html.querySelectorAll("[class='object'][id$='0']").forEach(function (node) {
  html.querySelectorAll(param).forEach(function (node) {
    // console.log(node.outerHTML)
    node.tagName = program;
  });
  html.set_content(html?.toString());
}

function _rm_program(html: HTMLElement, param: string) {
  html.querySelectorAll(param).forEach(function (node) {
    node.remove();
  });
  html.set_content(html?.toString());
}

function _img_program(param: string, html: HTMLElement) {
  let [query, height = "", width = ""] = param.split(",");
  height = height !== "" ? height : "auto";
  width = width !== "" ? width : "auto";
  html.querySelectorAll(query).forEach(function (node) {
    const src = node.textContent;
    const id = node.id;
    node.replaceWith(_img_element(id, height, width, src));
  });
}

function _img_element(
  id: string,
  height: string,
  width: string,
  src: string,
): string | Node {
  return new HTMLElement(
    "img",
    { id },
    `height="${height}" width="${width}" src="${src}" alt="image"`,
    null,
    [0, 0],
  );
}

function _wrap_program(param: string, html: HTMLElement) {
  const [tagName, ...attributes] = param.split(",");
  const [attrName, attrValue] = attributes;
  const rawAttributes = attributes.length > 0
    ? `${attrName}="${attrValue}"`
    : "";

  const wrapper = new HTMLElement(tagName, {}, rawAttributes, null, [0, 0]);
  wrapper.appendChild(html);
  html.set_content(wrapper.toString());
}

function _is_dot(query: string) {
  return query.match(/^.$/g)?.length;
}

function _commands(query: string): string[] {
  const [_cat, ...commands] = query
    .split("|")
    .map((match: string) => match.trim());
  return commands;
}
