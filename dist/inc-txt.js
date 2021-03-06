// assumed https://cdn.jsdelivr.net/npm/showdown is loaded

var request = new XMLHttpRequest();
var url = document.getElementsByClassName('include')[0].href;
var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');

    if ( url.match(/#$/) ) {
      var p = url.lastIndexOf('/') + 1;
      var d = url.lastIndexOf('.');
      url = url.substring(p,d) + '.txt';
      var elems = document.getElementsByClassName('include');
      elems[0].innerHTML = url;
      for(var i=0; i<elems.length; i++) {
        elems[i].href = url;
      }
    }
    request.open('GET', url);
    request.send();

    request.onload = function () {
       resp = request.response.toString()
       document.getElementById('txt').innerHTML = '<pre>'+resp+'</pre>';
          buf = resp.replace(/\\\n/g,'<br>');
          buf = buf.replace('%url%',loc);
          buf = buf.replace(/%domain%/g,document.location.hostname);
          buf = buf.replace(/%origin%/g,document.location.origin);
          buf = buf.replace(/{{DUCK}}/g,'http://duckduckgo.com/?q');
          if (! document.location.href.match(/#/) ) {
            if ( typeof(showdown) == 'undefined' ) {
              document.getElementById('rendered').innerHTML = "/!\\ showdown not loaded";
            } else {
             var converter = new showdown.Converter();
             document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
             document.getElementById('txt').style.display = 'none';
           }
          }
    }

