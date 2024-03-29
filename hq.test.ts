import { assertEquals } from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as path from "https://deno.land/std@0.125.0/path/mod.ts";
import { query_html } from "./hq.ts";

console.log(Deno.args);

function from_file(filepath: string, string_query: string, whitespace = true) {
  const string_html = _data_file(filepath);
  return query_html(string_query, string_html, whitespace);
}

function _data_file(file: string) {
  const filename = path.join(Deno.cwd(), file);
  const text = Deno.readTextFileSync(filename);
  return text;
}

Deno.test("can output html.", function () {
  const html = `<div id="name">St. Vincent</div>
<div id="artist_name">St. Vincent</div>
<div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div>
<div id="artist_image">
    <div id="height">640</div>
    <div id="url">https://image.url</div>
    <div id="width">640</div>
</div>
<ul id="artist_genres">
    <li id="0">art pop</li>
    <li id="1">electropop</li>
    <li id="2">etherpop</li>
</ul>
<div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div>
<div id="last_album_name">The Nowhere Inn</div>
<div id="last_album_image">
    <div id="height">640</div>
    <div id="url">image.jpg</div>
    <div id="width">640</div>
</div>
<ul id="last_album_genres">

</ul>`;

  assertEquals(from_file("_chunk.html", "."), html);
});

Deno.test("can change tag names.", function () {
  const html = `<div id="name">St. Vincent</div>
<h1 id="artist_name">St. Vincent</h1>
<div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div>
<div id="artist_image">
    <div id="height">640</div>
    <div id="url">https://image.url</div>
    <div id="width">640</div>
</div>
<ul id="artist_genres">
    <li id="0">art pop</li>
    <li id="1">electropop</li>
    <li id="2">etherpop</li>
</ul>
<div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div>
<div id="last_album_name">The Nowhere Inn</div>
<div id="last_album_image">
    <div id="height">640</div>
    <div id="url">image.jpg</div>
    <div id="width">640</div>
</div>
<ul id="last_album_genres"></ul>`;
  assertEquals(from_file("_chunk.html", ". | h1 #artist_name"), html);
});

Deno.test({
  // only: true,
  name: "can remove elements.",
  fn: function () {
    const html = `<div id="name">St. Vincent</div>
<h1 id="artist_name">St. Vincent</h1>
<div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div>
<div id="artist_image">
    <div id="url">https://image.url</div>
</div>
<ul id="artist_genres">
    <li id="0">art pop</li>
    <li id="1">electropop</li>
    <li id="2">etherpop</li>
</ul>
<div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div>
<h2 id="last_album_name">The Nowhere Inn</h2>
<div id="last_album_image">
    <div id="url">image.jpg</div>
</div>`;
    assertEquals(
      from_file(
        "_chunk.html",
        ". | h1 #artist_name | rm #last_album_genres,#height,#width | h2 #last_album_name"
      ),
      html
    );
  },
});

Deno.test("can wrap around elements.", function () {
  const html = `<article>
    <div id="name">St. Vincent</div>
    <h1 id="artist_name">St. Vincent</h1>
    <div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div>
    <div id="artist_image">
        <div id="url">https://image.url</div>
    </div>
    <ul id="artist_genres">
        <li id="0">art pop</li>
        <li id="1">electropop</li>
        <li id="2">etherpop</li>
    </ul>
    <div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div>
    <h2 id="last_album_name">The Nowhere Inn</h2>
    <div id="last_album_image">
        <div id="url">image.jpg</div>
    </div>
</article>`;
  assertEquals(
    from_file(
      "_chunk.html",
      // ". | h1 #artist_name | rm #last_album_genres #height #width | h2 #last_album_name | {article}",
      ". | h1 #artist_name | rm #last_album_genres,#height,#width | h2 #last_album_name | wp article"
    ),
    html
  );
});

Deno.test("can execute in diferrent order.", function () {
  const html = `<article>
    <div id="name">St. Vincent</div>
    <h1 id="artist_name">St. Vincent</h1>
    <div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div>
    <div id="artist_image">
        <div id="url">https://image.url</div>
    </div>
    <ul id="artist_genres">
        <li id="0">art pop</li>
        <li id="1">electropop</li>
        <li id="2">etherpop</li>
    </ul>
    <div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div>
    <h2 id="last_album_name">The Nowhere Inn</h2>
    <div id="last_album_image">
        <div id="url">image.jpg</div>
    </div>
</article>`;
  assertEquals(
    from_file(
      "_chunk.html",
      // ". | h1 #artist_name | rm #last_album_genres #height #width | h2 #last_album_name | {article}",
      ". | h1 #artist_name | wp article | rm #height,#width | h2 #last_album_name | rm #last_album_genres"
    ),
    html
  );
});

Deno.test("can change to <img> with different dimensions.", function () {
  let html = `<article>
    <div id="name">St. Vincent</div>
    <h1 id="artist_name">St. Vincent</h1>
    <div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div>
    <div id="artist_image"><img height="50" width="50" src="https://image.url" alt="image"></div>
    <ul id="artist_genres">
        <li id="0">art pop</li>
        <li id="1">electropop</li>
        <li id="2">etherpop</li>
    </ul>
    <div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div>
    <h2 id="last_album_name">The Nowhere Inn</h2>
    <div id="last_album_image"><img height="50" width="50" src="image.jpg" alt="image"></div>
</article>`;
  assertEquals(
    from_file(
      "_chunk.html",
      ". | h1 #artist_name | img #url,50,50 | wp article | rm #height,#width | h2 #last_album_name | rm #last_album_genres"
    ),
    html
  );

  html = `<article>
    <div id="name">St. Vincent</div>
    <h1 id="artist_name">St. Vincent</h1>
    <div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div>
    <div id="artist_image"><img height="auto" width="50" src="https://image.url" alt="image"></div>
    <ul id="artist_genres">
        <li id="0">art pop</li>
        <li id="1">electropop</li>
        <li id="2">etherpop</li>
    </ul>
    <div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div>
    <h2 id="last_album_name">The Nowhere Inn</h2>
    <div id="last_album_image"><img height="auto" width="50" src="image.jpg" alt="image"></div>
</article>`;

  assertEquals(
    from_file(
      "_chunk.html",
      ". | h1 #artist_name | img #url,,50 | wp article | rm #height,#width | h2 #last_album_name | rm #last_album_genres"
    ),
    html
  );
});

Deno.test("can output without whitespaces", function () {
  const html = `<article><div id="name">St. Vincent</div><h1 id="artist_name">St. Vincent</h1><div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div><div id="artist_image"><img height="50%" width="auto" src="https://image.url" alt="image"></div><ul id="artist_genres"><li id="0">art pop</li><li id="1">electropop</li><li id="2">etherpop</li></ul><div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div><h2 id="last_album_name">The Nowhere Inn</h2><div id="last_album_image"><img height="50%" width="auto" src="image.jpg" alt="image"></div></article>`;

  assertEquals(
    from_file(
      "_chunk.html",
      ". | h1 #artist_name | img #url,50% | wp article | rm #height,#width | h2 #last_album_name | rm #last_album_genres",
      false
    ),
    html
  );
});

Deno.test("can insert node after begin", function () {
  const html = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result">
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

  const expectedHtml = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result">
        <summary></summary>
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

  assertEquals(query_html(". | iab #result,summary", html), expectedHtml);
});

Deno.test("can insert template node after begin", function () {
  const html = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result" data-key="result-606" data-val="result" class="j2h-tuple">
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

  const expectedHtml = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result" data-key="result-606" data-val="result" class="j2h-tuple">
        <summary><input type="checkbox" id="result-606" value="result"><label for="result-606">result</label></summary>
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

  assertEquals(
    query_html(
      `
    .
    | itab [class="j2h-tuple"],
      <summary>
        <input type="checkbox" id="{{%}}" value="{{%}}" />
        <label for="{{%}}">{{%}}</label>
      </summary>,
      &.data-key,
      &.data-val,
      &.data-key,
      &.data-val
    `,
      html
    ),
    expectedHtml
  );
});

Deno.test("can insert node after begin with a value", function () {
  const html = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result">
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

  const expectedHtml = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result">
        <summary>hello!</summary>
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

  assertEquals(
    query_html(". | iab #result,summary,hello!", html),
    expectedHtml
  );
});

Deno.test(
  "can insert node after begin with a value from a parent reference",
  function () {
    const html = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result">
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

    const expectedHtml = `<ul>
    <li id="integer">ms</li>
    <li id="string">query</li>
    <details id="result">
        <summary>result</summary>
        <ul id="0">
            <li id="string">_createdAt</li>
            <li id="string">_id</li>
            <li id="string">_rev</li>
            <li id="string">_type</li>
            <li id="string">_updatedAt</li>
            <li id="string">imageUrl</li>
            <li id="string">name</li>
            <li id="string">title</li>
        </ul>
    </details>
</ul>`;

    assertEquals(
      query_html(". | iab #result,summary,&.id", html),
      expectedHtml
    );
  }
);

Deno.test("can wrap around with attribute", function () {
  const html = `
<div id="integer">ms</div>
<div id="string">query</div>
<ul id="result">
    <div id="0">
        <div id="string">_createdAt</div>
        <div id="string">_id</div>
        <div id="string">_rev</div>
        <div id="string">_type</div>
        <div id="string">_updatedAt</div>
        <div id="string">imageUrl</div>
        <div id="string">name</div>
        <div id="string">title</div>
    </div>
</ul>`;

  const expectedHtml = `<ul class="tree">
    <div id="integer">ms</div>
    <div id="string">query</div>
    <ul id="result">
        <div id="0">
            <div id="string">_createdAt</div>
            <div id="string">_id</div>
            <div id="string">_rev</div>
            <div id="string">_type</div>
            <div id="string">_updatedAt</div>
            <div id="string">imageUrl</div>
            <div id="string">name</div>
            <div id="string">title</div>
        </div>
    </ul>
</ul>`;

  assertEquals(query_html(". | wp ul,class,tree", html), expectedHtml);
});

Deno.test("can wrap around an specific element", function () {
  const html = `
<div id="integer">ms</div>
<div id="string">query</div>
<ul id="result">
    <div id="0">
        <div id="string">_createdAt</div>
        <div id="string">_id</div>
        <div id="string">_rev</div>
        <div id="string">_type</div>
        <div id="string">_updatedAt</div>
        <div id="string">imageUrl</div>
        <div id="string">name</div>
        <div id="string">title</div>
    </div>
</ul>`;

  const expectedHtml = `<ul class="tree">
    <div id="integer">ms</div>
    <div id="string">query</div>
    <li>
        <ul id="result">
            <div id="0">
                <div id="string">_createdAt</div>
                <div id="string">_id</div>
                <div id="string">_rev</div>
                <div id="string">_type</div>
                <div id="string">_updatedAt</div>
                <div id="string">imageUrl</div>
                <div id="string">name</div>
                <div id="string">title</div>
            </div>
        </ul>
    </li>
</ul>`;

  assertEquals(
    query_html(". | wp ul,class,tree | we #result,li", html),
    expectedHtml
  );
});

Deno.test({
  // only: true,
  name: "can change multiple tag names by querying css attribute selectors",
  fn: function () {
    const html = `<details id="parties" class="list">
  <summary>parties</summary>
  <ul id="0" class="object">
      <li id="string">id</li>
      <li id="string">type</li>
      <div id="metadata" class="object">
          <li id="string">date</li>
          <div id="main_image" class="object">
              <li id="string">url</li>
          </div>
      </div>
  </ul>
</details>`;

    const expectedHtml = `<details id="parties" class="list">
    <summary>parties</summary>
    <ul id="0" class="object">
        <li id="string">id</li>
        <li id="string">type</li>
        <ul>
            <div id="metadata" class="object">
                <li id="string">date</li>
                <ul>
                    <div id="main_image" class="object">
                        <li id="string">url</li>
                    </div>
                </ul>
            </div>
        </ul>
    </ul>
</details>`;

    assertEquals(
      query_html(". | we :not([id$='0'])[class='object'],ul", html),
      expectedHtml
    );

    assertEquals(
      query_html(". | we :not([id$='0']).object,ul", html),
      expectedHtml
    );
  },
});

Deno.test("can change value of elements with a template string", function () {
  const html = `
<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary>result</summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

  const expectedHtml = `<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary><input type="checkbox" id="sports" name="interest" value="sports"><label for="sports">Sports</label></summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

  assertEquals(
    query_html(
      '. | value summary,<input type="checkbox" id="sports" name="interest" value="sports" /><label for="sports">Sports</label>',
      html
    ),
    expectedHtml
  );
});

Deno.test(
  "can change value of elements by merging a template string and placeholder fields",
  function () {
    const html = `
<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary data-test="jamon">result</summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

    const expectedHtml = `<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary data-test="jamon"><input type="checkbox" id="sports" name="interest" value="sports"><label for="sports">result</label></summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

    assertEquals(
      query_html(
        '. | value summary,<input type="checkbox" id="sports" name="interest" value="sports" /><label for="sports">{{%}}</label>,&.value',
        html
      ),
      expectedHtml
    );

    const expectedHtml2 = `<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary data-test="jamon"><input type="checkbox" id="result" name="interest" value="sports"><label for="sports">result</label></summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

    assertEquals(
      query_html(
        '. | value summary,<input type="checkbox" id="{{%}}" name="interest" value="sports" /><label for="sports">{{%}}</label>,&.value,&.value',
        html
      ),
      expectedHtml2
    );

    const expectedHtml3 = `<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary data-test="jamon"><input type="checkbox" id="result" name="interest" value="jamon"><label for="sports">result</label></summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

    assertEquals(
      query_html(
        '. | value summary,<input type="checkbox" id="{{%}}" name="interest" value="{{%}}" /><label for="sports">{{%}}</label>,&.value,&.data-test,&.value',
        html
      ),
      expectedHtml3
    );
  }
);

Deno.test(
  "can change value of elements by merging a template string with mixed placeholder fields",
  function () {
    const html = `
<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary data-test="jamon">result</summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

    const expectedHtml = `<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary data-test="jamon"><input type="checkbox" id="uno" name="interest" value="dos"><label for="sports">tres</label></summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

    assertEquals(
      query_html(
        '. | value summary,<input type="checkbox" id="{{%}}" name="interest" value="{{%}}" /><label for="sports">{{%}}</label>,uno,dos,tres',
        html
      ),
      expectedHtml
    );

    const expectedHtml2 = `<li data-path="ROOT/ms" data-key="integer">ms</li>
<li data-path="ROOT/query" data-key="string">query</li>
<li>
    <details data-path="ROOT/result" data-key="result" class="j2h-tuple">
        <summary data-test="jamon"><input type="checkbox" id="uno" name="interest" value="result"><label for="tres">jamon</label></summary>
        <ul data-path="ROOT/result/0" data-key="0-754" data-name="0" class="j2h-record">
            <li data-path="ROOT/result/0/_createdAt" data-key="string">_createdAt</li>
            <li data-path="ROOT/result/0/_id" data-key="string">_id</li>
            <li data-path="ROOT/result/0/_rev" data-key="string">_rev</li>
            <li data-path="ROOT/result/0/_type" data-key="string">_type</li>
            <li data-path="ROOT/result/0/_updatedAt" data-key="string">_updatedAt</li>
            <li data-path="ROOT/result/0/imageUrl" data-key="string">imageUrl</li>
            <li data-path="ROOT/result/0/name" data-key="string">name</li>
            <li data-path="ROOT/result/0/title" data-key="string">title</li>
        </ul>
    </details>
</li>`;

    assertEquals(
      query_html(
        '. | value summary,<input type="checkbox" id="{{%}}" name="interest" value="{{%}}" /><label for="{{%}}">{{%}}</label>,uno,&.value,tres,&.data-test',
        html
      ),
      expectedHtml2
    );
  }
);

Deno.test(
  "regression: can change value of multiple same elements",
  function () {
    const html = `
    <li>
    <details data-path="ROOT/info" data-key="info-590" data-name="info" class="j2h-record">
        <summary>info</summary>
<li data-path="ROOT/info/count" data-key="integer">count</li>
<li data-key="null">prev</li>
</details>
</li>
<li>
    <details data-path="ROOT/results" data-key="results" class="j2h-tuple">
        <summary>results</summary>
        <ul data-path="ROOT/results/0" data-key="0-140" data-name="0" class="j2h-record">
            <li data-path="ROOT/results/0/id" data-key="integer">id</li>
            <li>
                <details data-path="ROOT/results/0/residents" data-key="residents" class="j2h-tuple">
                    <summary>residents</summary>
            <li data-path="ROOT/results/0/residents/0" data-key="string">0</li>
    </details>
</li>
<li data-path="ROOT/results/0/url" data-key="string">url</li>
</ul>
</details>
</li>`;

    const expectedHtml = `<li>
    <details data-path="ROOT/info" data-key="info-590" data-name="info" class="j2h-record">
        <summary><span>info</span></summary>
<li data-path="ROOT/info/count" data-key="integer">count</li>
<li data-key="null">prev</li>
</details>
</li>
<li>
    <details data-path="ROOT/results" data-key="results" class="j2h-tuple">
        <summary><span>results</span></summary>
        <ul data-path="ROOT/results/0" data-key="0-140" data-name="0" class="j2h-record">
            <li data-path="ROOT/results/0/id" data-key="integer">id</li>
            <li>
                <details data-path="ROOT/results/0/residents" data-key="residents" class="j2h-tuple">
                    <summary><span>residents</span></summary>
            <li data-path="ROOT/results/0/residents/0" data-key="string">0</li>
    </details>
</li>
<li data-path="ROOT/results/0/url" data-key="string">url</li>
</ul>
</details>
</li>`;

    assertEquals(
      query_html(". | value summary,<span>{{%}}<span>,&.value", html),
      expectedHtml
    );
  }
);
