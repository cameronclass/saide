!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e||self).readSmore=n()}(this,(function(){var e={blockClassName:"read-smore",wordsCount:70,charsCount:150,moreText:"Читать еще...",lessText:"Меньше",isInline:!1};function n(n,t){t=Object.assign({},e,t);var r={originalContentArr:[],truncatedContentArr:[]};return{init:function(){for(var e=0,a=n.length;e<a;++e)s=e,l=function(e,n,t){void 0===t&&(t=!1);var r=function(e){return e.replace(/(^\s*)|(\s*$)/gi,"")}(e);return t?r.split("").slice(0,n).join("")+"...":r.split(/\s+/).slice(0,n).join(" ")+"..."}(c=(o=n[e]).innerHTML,i=o.dataset.readSmoreChars||o.dataset.readSmoreWords||t.wordsCount,!!o.dataset.readSmoreChars),d=c.length,r.originalContentArr.push(c),r.truncatedContentArr.push(l),i<d&&(o.innerHTML=r.truncatedContentArr[s],function(e){var a=document.createElement("span");a.className=t.blockClassName+"__link-wrap",a.innerHTML="<a id="+t.blockClassName+"_"+e+"\n                             class="+t.blockClassName+'__link\n                             style="cursor:pointer;">\n                             '+t.moreText+"\n                          </a>",n[e].after(a),function(e){document.querySelector("#"+t.blockClassName+"_"+e).addEventListener("click",(function(a){n[e].classList.toggle("is-expanded");var o=a.currentTarget;"true"!==o.dataset.clicked?(n[e].innerHTML=r.originalContentArr[e],o.innerHTML=t.lessText,o.dataset.clicked=!0):(n[e].innerHTML=r.truncatedContentArr[e],o.innerHTML=t.moreText,o.dataset.clicked=!1)}))}(e)}(s));var o,s,i,c,l,d}}}return n.options=e,n}));