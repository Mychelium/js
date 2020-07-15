# js: my javascript collections

<!-- vim: ft=markdown nospell
-->
a bunch of personal javascripts usable via CDN ([jsdelivr][jd], [cloudflare][cf] or [github][gh])
(last [commit](https://github.com/mychelium/js/commit/) & [releases](https://github.com/mychelium/js/releases))

 * [inc.js][1] : a javascript that replace div with class=include with the content of its data-src's attribute
 * [inc-fp.js][2] : a javascript to include and render a markdown file from framapad
 * [...](https://cdn.jsdelivr.net/gh/mychelium/js@master/dist/)

[1]: https://cdn.jsdelivr.net/gh/mychelium/js@master/dist/inc.js
[2]: https://cdn.jsdelivr.net/gh/mychelium/js@master/dist/inc-fp.js



 * other URLs for accessing the files :
    - <https://gateway.ipfs.io/ipfs/QmWp3jo1b5F6rNxu6tUWwcNx7sUFcbm6CKEZAL5NPJ7WsT/www/js>
    - <https://cloudflare-ipfs.com/ipfs/QmQvZThqsPJEjzX9RSUZrcqNXPrJQmKV9UbP8MaXai8Qpx/js>
    - <https://mychelium.github.io/js>

[![version](https://badge.fury.io/gh/mychelium%2Fjs.svg)](https://badge.fury.io/gh/mychelium%2Fjs)
[![](https://data.jsdelivr.com/v1/package/gh/mychelium/js/badge)](https://www.jsdelivr.com/package/gh/mychelium/js)

### Examples:

 * collaborative framapad "web-page" : <http://ipfs.io/ipfs/QmQvZThqsPJEjzX9RSUZrcqNXPrJQmKV9UbP8MaXai8Qpx/js/examples/frama.htm>
 *  or <https://mychelium.github.io/js/examples/frama.htm>

 *  ipfs node detection : <https://mychelium.github.io/js/examples/ipfsdetect.htm>

 * misc : about [how](https://www.one-tab.com/page/XuCCeOg2SkSSwTD8JzvWfw) to publish on GitHub (see <https://ipfs.io/ipfs/QmX87y253JbdLWUcd5Qdd3HaBYpoiqr8wVUYQHiuNYHAG2/>)

 * blockRing™ hash : qm=[zdj7WdkSTEFvC1s7jhAn6YVvy2qaMDB5tk9B9BGBJL2JqyJ8v](http://gateway.ipfs.io/ipfs/zdj7WdkSTEFvC1s7jhAn6YVvy2qaMDB5tk9B9BGBJL2JqyJ8v)

### Usage:

```html
<!-- previous revision: 76b9bf3
<script src="https://cdn.statically.io/gh/mychelium/js/76b9bf3/dist/inc-fp.js">
-->
<!-- current revision: latest : https://github.com/mychelium/js/commit/master -->
<script src="https://cdn.jsdelivr.net/gh/mychelium/js@master/dist/inc-fp.min.js">
</script>
 ```

[gh]: http://github.com/mychelium/
[jd]: https://www.jsdelivr.com/package/gh/mychelium/js
[cf]: https://cloudflare-ipfs.com/ipfs/QmQvZThqsPJEjzX9RSUZrcqNXPrJQmKV9UbP8MaXai8Qpx/js

clone it with the following command :
  ```git clone https://github.com/mychelium/js.git```

### Currently working on

[ipfs-mutables.js](http://127.0.0.1:8080/ipfs/QmWxb7Zx27rg8usPFiZR9PmMsisaZrL8HNENCtkiaiLP27/ipfs-mutables.js)


### Last fix ...

- added sha256 support
