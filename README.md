# js: my javascript collections

<!-- vim: ft=markdown nospell
-->
a bunch of personal javascripts usable via CDN ([jsdelivr][jd], [cloudflare][cf] or [github][gh])
(last [commit](https://github.com/iglake/js/commit/) & [releases](https://github.com/iglake/js/releases))

 * [inc.js][1] : a javascript that replace div with class=include with the content of its data-src's attribute
 * [inc-fp.js][2] : a javascript to include and render a markdown file from framapad
 * [...](https://cdn.jsdelivr.net/gh/iglake/js@master/dist/)

[1]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc.js
[2]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.js



 * other URLs for accessing the files :
    - <https://gateway.ipfs.io/ipfs/bafybeihxdzbiwh2o2x5x6lit5av5u73q3w3ppa54r3up2rbtznecdrklum/www/js>
    - <https://cloudflare-ipfs.com/ipfs/QmbB2Bq7SVGj19egMGXdbHtmfKqusNU9JyfQLMijK2Ji9G/js>
    - <https://iglake.github.io/js>

[![version](https://badge.fury.io/gh/iglake%2Fjs.svg)](https://badge.fury.io/gh/iglake%2Fjs)
[![](https://data.jsdelivr.com/v1/package/gh/iglake/js/badge)](https://www.jsdelivr.com/package/gh/iglake/js)

### Examples:

 * collaborative framapad "web-page" : <http://ipfs.io/ipfs/QmbB2Bq7SVGj19egMGXdbHtmfKqusNU9JyfQLMijK2Ji9G/js/examples/frama.htm>
 *  or <https://iglake.github.io/js/examples/frama.htm>

 *  ipfs node detection : <https://iglake.github.io/js/examples/ipfsdetect.htm>

 * misc : about [how](https://www.one-tab.com/page/XuCCeOg2SkSSwTD8JzvWfw) to publish on GitHub (see <https://ipfs.io/ipfs/QmX87y253JbdLWUcd5Qdd3HaBYpoiqr8wVUYQHiuNYHAG2/>)

 * blockRing™ hash : qm=[zdj7WaamhqdY67iEViCreVKBj7Vkw3sEfkarCsPnyYzApEqAf](http://gateway.ipfs.io/ipfs/zdj7WaamhqdY67iEViCreVKBj7Vkw3sEfkarCsPnyYzApEqAf)

### Usage:

```html
<!-- previous revision: 5dbfa6a
<script src="https://cdn.statically.io/gh/iglake/js/5dbfa6a/dist/inc-fp.js">
-->
<!-- current revision: latest : https://github.com/iglake/js/commit/master -->
<script src="https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.min.js">
</script>
 ```

[gh]: http://github.com/iglake/
[jd]: https://www.jsdelivr.com/package/gh/iglake/js
[cf]: https://cloudflare-ipfs.com/ipfs/QmbB2Bq7SVGj19egMGXdbHtmfKqusNU9JyfQLMijK2Ji9G/js

clone it with the following command :
  ```git clone https://github.com/iglake/js.git```

### Last fix ...

 - added a %date% to the config.js from passed unix_timestamp (json.tics)
