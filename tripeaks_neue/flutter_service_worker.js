'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3cb5eaccd48db63ea91ecbddadca3b6f",
"assets/AssetManifest.bin.json": "427f45db13837a85334da109e31febb3",
"assets/AssetManifest.json": "6ab4a42b20f21ec296e812cda57311d3",
"assets/FontManifest.json": "fbbfd34be3e15e3d7c89ddd22e8fe3b0",
"assets/fonts/actions.ttf": "023a161fb3e58faecd187818bd93774b",
"assets/fonts/cards.ttf": "89cfcaebc348be3ccf4f7334ce51631b",
"assets/fonts/MaterialIcons-Regular.otf": "aba11e7c1ccd4abda470a2f8df0f18b6",
"assets/fonts/Outfit-VariableFont_wght.ttf": "1b443ee3b6993db873f1faedffe56133",
"assets/images/2.0x/card_counter_dark.png": "393305a4ac38d93b5a7f93f88d86647e",
"assets/images/2.0x/card_counter_light.png": "04f8e951ef66b75fe9bfbb1783e5345b",
"assets/images/2.0x/empty.png": "ea5ffc1a6cb352e4cc7733e9b4155c0d",
"assets/images/2.0x/tropy.png": "593a91965d23daaaf2feb69ea329febd",
"assets/images/2.0x/welcome.png": "3852b21ab776b55547abb1bf6beda1d8",
"assets/images/4.0x/card_counter_dark.png": "f950ccefc03a61762b363e81b8bacd5f",
"assets/images/4.0x/card_counter_light.png": "a5922e63944eae5e4224deff24eeaac9",
"assets/images/4.0x/empty.png": "4b98e910e2fd7ec7735d887ff35946ee",
"assets/images/4.0x/tropy.png": "5bd4590b8cd2b51d8eabc094fe137769",
"assets/images/4.0x/welcome.png": "087f025be2a104350a724ca9ab1b7e47",
"assets/images/card_counter_dark.png": "86c046eb63db3788fb1aa9e10ac5e01f",
"assets/images/card_counter_light.png": "727e294cc24f8b97faa33e053e53a935",
"assets/images/empty.png": "21063552415b1e4ec468393e37e85a8c",
"assets/images/tropy.png": "14263d725d8ca1ec60077a73d23307f2",
"assets/images/welcome.png": "2891922558eb363dd35a74577df48cf6",
"assets/NOTICES": "ffb0a65fc98df24d7c160776cab146e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/sounds/draw.mp3": "18be04d17c945b4aeb0cde52d148fdcf",
"assets/sounds/error.mp3": "7e90be35feb08434ed5cfc0e8dc7d3fe",
"assets/sounds/gameover.mp3": "1d886c6f45c45f5e338d493667bc79c2",
"assets/sounds/start.mp3": "66f00191524a22edc067485118f7728a",
"assets/sounds/take1.mp3": "014a8407f41f5b00f1d8738d4afe5292",
"assets/sounds/take2.mp3": "1da1feba40e805df59644c020ed5c2c9",
"assets/sounds/take3.mp3": "b887ed1723fcf409ebcc84b95195a0e1",
"assets/sounds/undo.mp3": "8539b8e4baf58799751da94434aac261",
"assets/sounds/win.mp3": "19ab46c42181aa4a7447226ff6352c62",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d42b946593d6e2db015bf0805f40622c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59cf8bb14175b4ae089b2067e04edf38",
"/": "59cf8bb14175b4ae089b2067e04edf38",
"main.dart.js": "30e9f03a16eae622771ff0285128859c",
"manifest.json": "f015457476e5205c205d66fc4e89e363",
"version.json": "e2e1ee2f94a78deb62f9e8d55c6b694e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
