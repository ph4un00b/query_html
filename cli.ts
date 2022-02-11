import { readLines } from "https://deno.land/std@0.125.0/io/mod.ts";
import { query_html } from "./hq.ts";

const html = await data_stdin();
console.log(query_html(Deno.args[0], html.join(""), false));

async function data_stdin() {
  const html = [];
  for await (const line of readLines(Deno.stdin)) {
    html.push(line);
  }
  return html;
}
