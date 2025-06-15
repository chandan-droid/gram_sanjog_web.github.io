'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8533ceda1c7ecb5979871d33d70c5a43",
".git/config": "b42d705f0e338ad8e7bf687034988003",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e3c0aea6437524a5c1c1447fb633c687",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25a876a46ca42e0e06a75e1db2dd42a9",
".git/logs/refs/heads/main": "25a876a46ca42e0e06a75e1db2dd42a9",
".git/logs/refs/remotes/web/main": "579286947d65cb9190d9423c4df1748b",
".git/objects/03/137f9a19bf954fe4caeadc22eb4410a0f819c5": "2cd72ecc65adc63912e13f36cf4c1f6a",
".git/objects/04/b08549f26f368f14b465227a0e4b7ed6de6934": "32792c01e1e538bf08e664aedba47d33",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/14/caa36e674b046df694b6bda9e4d95c7eb01a53": "d2dc8b42115737d7a8eb1e4eeb548410",
".git/objects/15/6b3a85fda7604149b76bc4cbf0746772cf526d": "2e2cf468631656a4826ed2f2987ed64d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/29d283cff547a8919b2d511978c75b80dbc9b7": "05bb0a584bb2baefaedc8cfcab979c28",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/30/2729712542ac73685dbb9bb29541004514fc43": "8e3cad47713501f60ec94cf8e94621f1",
".git/objects/30/fc90bed448b3f2a6caaa9a9109baa651dcd5f4": "f2880a343b8565b4b429509ec9666aeb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/be2183fab10dd804bf70653bae2842e742867c": "b610cdf7e8a1aadc540409f8cff190ca",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/16686a87bc22fa1de429e11f0f3dc4d3c20d05": "033c2df06c6ce888d95eaeae94b26bdd",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/7a3c4ac50d93dafc83f4d8134a7496c8cdd21a": "5a1bcbc7c6f7befb6e7111ad6f35c1b4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/126de679a5c93f16ddc2dbf64bc7feabfc423f": "f08804413aefc9693691d290f857aed7",
".git/objects/48/b345916bfe47670ce89f976e6ac93c33ae039e": "a9eff9a7c055220220d87a33378a0fb6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/112b2a45283dd2bb734ade8ec2595461aef89c": "19bb44d51b176b90ffbd80b433b5793b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/9575b89b99063f9f04f7112060ca9ba12d8afc": "2cf60265947c431130a90fef74128ada",
".git/objects/70/5a201d57eb941797d0b26d20fe1c7e0751cb6b": "95eb8f6817e7ee74ba53ff87486f43b5",
".git/objects/83/1a950d980e3641feced6f760f10f03ed587437": "82232cf32b8e278e94d5b724fddd24e6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/3d2935e2a0d9ca0dcfe3a7bc8bb5ba82e8e061": "46e1851b46bdbeb531fc3c19be8bd42d",
".git/objects/94/2953994b13db8ed088f379c57f77db301669a6": "3ef071f1af5dbe7e49b8a78f5430974b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/ac/41d346d4d5d32baa4667f670167c32691233d0": "78ca0905d5e375615e1b55a128497969",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/157a8320832aeade38b9e6c227f53ed7b9af05": "7bc5c5f12dc56e5abba78b875b541bfb",
".git/objects/b6/2c2573f5c046d5aefd20c863c4bfdb38decc81": "82479de789fcd8f14457531e038a3290",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/40e945d5182d7fdecc651202f60354587045ce": "d248aff800db5485069a371febd07897",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/03fad0ab4a603e35a12bae70572183ae1d08de": "38d5d9afed5e7e2527312931735131f2",
".git/objects/c1/54726f33128d1807e6209832fba8bccc6f36b7": "030a886b4c77dd32a44327547b512903",
".git/objects/c2/ddb6e67f21b3a92d7637e018775b2954c1bac1": "b7a41f9bc4a446de0948017ba65eb687",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ec29cf639765e2c78ecb48c3213ea17c88f498": "52acd374ffb577dcedf5205f366d3f25",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/4f27d91094ec30e1e68e544254e9e742c102a7": "f7d95ce127e3d8c9f9950f810f57dd29",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "53b952b34ac8990e9dd9097c706def3c",
".git/refs/remotes/web/main": "53b952b34ac8990e9dd9097c706def3c",
"assets/AssetManifest.bin": "249b37a8a4a87a840cd7fc3ce6757abe",
"assets/AssetManifest.bin.json": "5d56438d1ab778965d75feb0e2acb218",
"assets/AssetManifest.json": "eb7838bc404d584d7ab34009d72adb0b",
"assets/assets/logo/gram_sanjog_app_icon.png": "a8ebbec3c272c453c8e7af8c98542e0c",
"assets/assets/logo/gram_sanjog_app_icon_trans.png": "e112e308677bab65b38d00a970028ec4",
"assets/assets/logo/gram_sanjog_logo.png": "ec934ceb9f261cc100d1490cd65f9680",
"assets/assets/logo/gram_sanjog_splash.png": "2f9d2736435e4efbaf287f4c7e65b881",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "12438e79a43e2f98ce1ef9afc7a837f6",
"assets/NOTICES": "7dc8482ef655cd72e5d0024dcd38e291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "65441182cfd4982c781df41caeb5a036",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2489f03298ad769e7414e33a2922755f",
"/": "2489f03298ad769e7414e33a2922755f",
"main.dart.js": "d2c810e6278edfa9d9a79064bae1a579",
"manifest.json": "c5312020840d78e9cccc58033f2d9942",
"splash/img/dark-1x.png": "057e535d5473b7d912e86c081b1dddf7",
"splash/img/dark-2x.png": "14a33dffafba70bab900f35e1b6d5af6",
"splash/img/dark-3x.png": "9edc9eb178c1c256adf2b5e1cc9eb199",
"splash/img/dark-4x.png": "d35731139aa94222436ba2840ee679cd",
"splash/img/light-1x.png": "057e535d5473b7d912e86c081b1dddf7",
"splash/img/light-2x.png": "14a33dffafba70bab900f35e1b6d5af6",
"splash/img/light-3x.png": "9edc9eb178c1c256adf2b5e1cc9eb199",
"splash/img/light-4x.png": "d35731139aa94222436ba2840ee679cd",
"version.json": "83130d16be10e2e97a81bcadcc526f09"};
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
