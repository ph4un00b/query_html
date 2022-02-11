```diff
@@ raw install @@
```
`$ deno install --reload -n query_html --allow-read https://raw.githubusercontent.com/ph4un00b/query_html/master/cli.ts`

```html
<div id="name">Goldcap</div>
<div id="artist_name">Goldcap</div>
<div id="artist_id">0uoaqsdWJ2Mbm9g0hjjZns</div>
<div id="artist_image">
    <div id="height">640</div>
    <div id="url">image.avif</div>
    <div id="width">640</div>
</div>
<ul id="artist_genres">
    <li id="0">arab electronic</li>
    <li id="1">organic electronic</li>
</ul>
<div id="last_album_id">2wWr1vIjDVV5yy1bGoekzF</div>
<div id="last_album_name">Breathe into Me (Incl. Goldcap Remix)</div>
<div id="last_album_image">
    <div id="height">640</div>
    <div id="url">https://i.scdn.co/image/ab67616d0000b2732afc92c0999db8677e19e48d</div>
    <div id="width">640</div>
</div>
<ul id="last_album_genres">

</ul>
```

```diff
@@ if you run @@
```
`$ html | query_html ". | h1 #artist_name | img #url,25%,25% | rm #last_album_genres #height #width | picture #last_album_image | rm #name | h1 artist_name | wp article"`

```diff
-<div id="name">Goldcap</div>
+<article>
-<div id="artist_name">Goldcap</div>
+    <h1 id="artist_name">Goldcap</h1>
-<div id="artist_id">0uoaqsdWJ2Mbm9g0hjjZns</div>
-<div id="artist_image">
-    <div id="height">640</div>
-    <div id="url">image.avif</div>
-    <div id="width">640</div>
-</div>
+    <div id="artist_image"><img height="25%" width="25%" src="image.avif" alt="image"></div>
-<ul id="artist_genres">
-    <li id="0">arab electronic</li>
-    <li id="1">organic electronic</li>
-</ul>
-<div id="last_album_id">2wWr1vIjDVV5yy1bGoekzF</div>
-<div id="last_album_name">Breathe into Me (Incl. Goldcap Remix)</div>
-<div id="last_album_image">
-    <div id="height">640</div>
-    <div id="url">image.url</div>
-    <div id="width">640</div>
-</div>
+    <picture id="last_album_image"><img height="25%" width="25%" src="https://image.url" alt="image"></picture>
-<ul id="last_album_genres">
-
-</ul>
```

```diff
@@ run test @@
```
`$ deno test --allow-read . --watch`