"use strict";var precacheConfig=[["/robz26/ClickyMemory/index.html","55f916409a849f148ca16130b4652e18"],["/robz26/ClickyMemory/static/css/main.f37e3fd3.css","929fe8aa7b58b4f4cd5df6ea0e5592c4"],["/robz26/ClickyMemory/static/js/main.d7deca0b.js","6c4e61bfe0e0559f7e22a8d631741b27"],["/robz26/ClickyMemory/static/media/Arya.acfefd72.jpg","acfefd72ada40d500122cb855cc05781"],["/robz26/ClickyMemory/static/media/Bran.371501d7.png","371501d73ad39644ca01f5b80c1f7ae5"],["/robz26/ClickyMemory/static/media/Brienne.93da260a.png","93da260ac31cde5f2f877183972455da"],["/robz26/ClickyMemory/static/media/Bronn.a1fc6211.jpg","a1fc6211dc1f8cf565cc437f7159005a"],["/robz26/ClickyMemory/static/media/Catelyn.d78c610d.jpg","d78c610debdeac1532accefe4268e87e"],["/robz26/ClickyMemory/static/media/Cersei.bd28e2ba.jpeg","bd28e2ba78e6d5236ec600cf50133b32"],["/robz26/ClickyMemory/static/media/Dany_T.4039c9bf.jpg","4039c9bf62e449b5f241659cd7837e10"],["/robz26/ClickyMemory/static/media/Davos.1c495f74.jpg","1c495f74a455dad43a09a35746c27bf3"],["/robz26/ClickyMemory/static/media/Gendry.8c14579c.jpg","8c14579cb0f8d4168cca692747b52984"],["/robz26/ClickyMemory/static/media/Gilly.35d7b12f.jpg","35d7b12ff5a788952d48b6361f1a91ea"],["/robz26/ClickyMemory/static/media/Hodor.63091d23.jpeg","63091d23f4a171032207cc5e06116f1e"],["/robz26/ClickyMemory/static/media/Hound.ddfd2c1b.jpeg","ddfd2c1b1decc6adc28f8a6a3104fe89"],["/robz26/ClickyMemory/static/media/Jamie.9d4871b9.png","9d4871b9beab4caa70421a552ff99307"],["/robz26/ClickyMemory/static/media/Jaqen.b963b956.png","b963b956b79d0d66d2680e14f74f28c4"],["/robz26/ClickyMemory/static/media/Joffery.b7273086.jpg","b72730867f0918abca6447b5aeb04b5a"],["/robz26/ClickyMemory/static/media/Kaldrogo.c02653f8.jpg","c02653f89145bcabe31fa9263a0cc62f"],["/robz26/ClickyMemory/static/media/Margery.e77b43d5.png","e77b43d52710bfb5d57b31539cdf98e2"],["/robz26/ClickyMemory/static/media/Melisandre.a3fbcb08.jpg","a3fbcb0857afda54def9e80ddd9ccfd9"],["/robz26/ClickyMemory/static/media/Messandei.a0169a71.png","a0169a71ff5db39f49a02913235b534c"],["/robz26/ClickyMemory/static/media/Ned.7bfd0ba9.jpg","7bfd0ba9248478b5f96faa95f8e4b9c4"],["/robz26/ClickyMemory/static/media/Night_king.b137e0f9.jpg","b137e0f9d6ddc7deb44101833b07bc5a"],["/robz26/ClickyMemory/static/media/Olenna.27c00fdc.jpg","27c00fdca3241713ab08bbd03a0fd528"],["/robz26/ClickyMemory/static/media/Pod.7a99c7f3.jpg","7a99c7f37c790a960e26c4a83297aa4a"],["/robz26/ClickyMemory/static/media/Rob.ea309936.jpg","ea3099365a901d8ec4762c51ee104521"],["/robz26/ClickyMemory/static/media/Samwell.846b40d4.jpeg","846b40d417888ef83a12e8332b87b292"],["/robz26/ClickyMemory/static/media/Sansa_stark.bae83261.jpg","bae832617fc87c94ca98392b25f3e57b"],["/robz26/ClickyMemory/static/media/Stannis_B.88e0f7b3.jpeg","88e0f7b3c6fec344e7fb3a41bd8a29bd"],["/robz26/ClickyMemory/static/media/Theon.5139b73c.png","5139b73cb67c5a2d6f037b6b5e34f21b"],["/robz26/ClickyMemory/static/media/Tirion.955885f8.jpg","955885f8c6c06ad638d6176f67375d67"],["/robz26/ClickyMemory/static/media/Tommen.9f5a033c.jpg","9f5a033c43528ede0582f7dbdab05603"],["/robz26/ClickyMemory/static/media/Tormund.93ed89bc.jpg","93ed89bcebae0804ca1b74a6c6fd1004"],["/robz26/ClickyMemory/static/media/Tywin.785fef8d.jpg","785fef8ded8ebc23232008fd19ca42a3"],["/robz26/ClickyMemory/static/media/Varys.cca9da6c.jpg","cca9da6cb6748bc295bb0cc602a52c92"],["/robz26/ClickyMemory/static/media/Walder.5c95553b.jpeg","5c95553b2aac997ca463da3334e397ec"],["/robz26/ClickyMemory/static/media/Ygritte.631bff0d.jpg","631bff0dfda61c523a28cbf6a92c3961"],["/robz26/ClickyMemory/static/media/john_snow.a64a24fa.jpg","a64a24fa45bfa42f9511dc8d99071ca2"],["/robz26/ClickyMemory/static/media/jorah.dca5614f.png","dca5614f7facc36b0bc787ac3b075c4f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,r){var t=new URL(e);return r&&t.pathname.match(r)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],r=new URL(a,self.location),t=createCacheKey(r,hashParamName,c,/\.\w{8}\./);return[r.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,r),e=urlsToCacheKeys.has(c));var t="/robz26/ClickyMemory/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(t,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});