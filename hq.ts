import {
  HTMLElement,
  parse,
} from "https://esm.sh/node-html-parser@5.2.0";

export function query_html(string_query: string, html_string: string, whitespace = true) {
  if (_is_dot(string_query)) return html_string;

  let html: HTMLElement = parse(html_string);
  for (const expression of _commands(string_query)) {
    const [program, ...parameters] = expression.split(" ");
    _run(program, parameters, html);
    html = parse(html?.toString());
  }

  if (whitespace) {
    return html.toString();
  } else {
    return html.removeWhitespace().toString();
  }
}

function _run(program: string, params: string[], html: HTMLElement) {
  for (const param of params) {
    if (program === "wp") {
      const wrapper = new HTMLElement(param, {}, "", null);
      wrapper.appendChild(html);
      html.set_content(wrapper.toString());
    } else if (program === "img") {
      let [query, height = "", width = ""] = param.split(",");
      height = height !== "" ? height : "auto";
      width = width !== "" ? width : "auto";
      html.querySelectorAll(query).forEach(function (node) {
        const src = node.textContent;
        node.replaceWith(
          new HTMLElement(
            "img",
            { id: node.id },
            `height="${height}" width="${width}" src="${src}" alt="image"`,
            null,
          ),
        );
      });
    } else {
      html.querySelectorAll(param).forEach(function (node) {
        if (program === "rm") {
          node.remove();
        } else {
          node.tagName = program;
        }
      });
      html.set_content(html?.toString());
    }
  }
}

function _is_dot(string_query: string) {
  return string_query.match(/^.$/g)?.length;
}

function _commands(string_query: string): string[] {
  const [_cat, ...commands] = string_query
    .split("|")
    .map((match: string) => match.trim());
  return commands;
}
