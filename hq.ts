import {
  HTMLElement,
  Node,
  parse,
  TextNode,
} from "https://esm.sh/node-html-parser@5.2.0";
import beautify from "https://esm.sh/js-beautify@1.14.0";

export function query_html(
  query: string,
  html_data: string,
  whitespace = true
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
    if (program == "iab") {
      const [selector, tagToInsert, nodeValueOrExpression] = param.split(",");
      // todo: handle "." in raw strings, f.i. -> "hello . with . dots."
      const [_placeholder, attribute] = nodeValueOrExpression?.split(".") ?? [];
      html.querySelectorAll(selector).forEach(function (node) {
        const elementToInsert = new HTMLElement(tagToInsert, {}, "", null);
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
  html.querySelectorAll(param).forEach(function (node) {
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
  src: string
): string | Node {
  return new HTMLElement(
    "img",
    { id },
    `height="${height}" width="${width}" src="${src}" alt="image"`,
    null
  );
}

function _wrap_program(param: string, html: HTMLElement) {
  const [tagName, ...attributes] = param.split(",");
  const [attrName, attrValue] = attributes;
  const rawAttributes =
    attributes.length > 0 ? `${attrName}="${attrValue}"` : "";

  const wrapper = new HTMLElement(tagName, {}, rawAttributes, null);
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
