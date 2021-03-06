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

Deno.test("can output html.", function() {
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

Deno.test("can change tag names.", function() {
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

Deno.test("can remove elements.", function() {
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
      ". | h1 #artist_name | rm #last_album_genres #height #width | h2 #last_album_name",
    ),
    html,
  );
});

Deno.test("can wrap around elements.", function() {
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
      ". | h1 #artist_name | rm #last_album_genres #height #width | h2 #last_album_name | wp article",
    ),
    html,
  );
});

Deno.test("can execute in diferrent order.", function() {
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
      ". | h1 #artist_name | wp article | rm #height #width | h2 #last_album_name | rm #last_album_genres",
    ),
    html,
  );
});

Deno.test("can change to <img> with different dimensions.", function() {
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
      ". | h1 #artist_name | img #url,50,50 | wp article | rm #height #width | h2 #last_album_name | rm #last_album_genres",
    ),
    html,
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
      ". | h1 #artist_name | img #url,,50 | wp article | rm #height #width | h2 #last_album_name | rm #last_album_genres",
    ),
    html,
  );
})

Deno.test("can output without whitespaces", function() {
  const html = `<article><div id="name">St. Vincent</div><h1 id="artist_name">St. Vincent</h1><div id="artist_id">7bcbShaqKdcyjnmv4Ix8j6</div><div id="artist_image"><img height="50%" width="auto" src="https://image.url" alt="image"></div><ul id="artist_genres"><li id="0">art pop</li><li id="1">electropop</li><li id="2">etherpop</li></ul><div id="last_album_id">1jfLCbkowa2O8Wq52mo61d</div><h2 id="last_album_name">The Nowhere Inn</h2><div id="last_album_image"><img height="50%" width="auto" src="image.jpg" alt="image"></div></article>`;

  assertEquals(
    from_file(
      "_chunk.html",
      ". | h1 #artist_name | img #url,50% | wp article | rm #height #width | h2 #last_album_name | rm #last_album_genres",
      false),
    html,
  );

});
