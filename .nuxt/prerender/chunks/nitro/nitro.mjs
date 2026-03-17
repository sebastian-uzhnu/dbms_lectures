import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, createError, getResponseStatus, appendHeader, getQuery as getQuery$1, getCookie, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/h3/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash, joinRelativeURL } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ufo/dist/index.mjs';
import { unified } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unified/index.js';
import remarkParse from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-mdc/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/defu/dist/defu.mjs';
import remarkGFM from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/rehype-raw/index.js';
import { detab } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/detab/index.js';
import { snakeCase, kebabCase, pascalCase } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/scule/dist/index.mjs';
import { normalizeUri } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/micromark-util-sanitize-uri/index.js';
import { toString } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/github-slugger/index.js';
import destr from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/klona/dist/index.mjs';
import { getContext } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/sebastian/Documents/Code/college/database_lectures/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/sebastian/Documents/Code/college/database_lectures/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

// @ts-check


/**
 * @param {string} item
 */
const normalizeFsKey = item => decodeURIComponent(item.replaceAll(':', '_'));

/**
 * @param {{ base: string }} opts
 */
const _47Users_47sebastian_47Documents_47Code_47college_47database_lectures_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47utils_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCache({ max: 1000 });

  return {
    ...fs, // fall back to file system - only the bottom three methods are used in renderer
    async setItem (key, value, opts) {
      await Promise.all([
        fs.setItem?.(normalizeFsKey(key), value, opts),
        lru.setItem?.(key, value, opts),
      ]);
    },
    async hasItem (key, opts) {
      return await lru.hasItem(key, opts) || await fs.hasItem(normalizeFsKey(key), opts)
    },
    async getItem (key, opts) {
      return await lru.getItem(key, opts) || await fs.getItem(normalizeFsKey(key), opts)
    },
  }
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', _47Users_47sebastian_47Documents_47Code_47college_47database_lectures_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47utils_47cache_45driver_46js({"driver":"/Users/sebastian/Documents/Code/college/database_lectures/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js","base":"/Users/sebastian/Documents/Code/college/database_lectures/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/sebastian/Documents/Code/college/database_lectures","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/sebastian/Documents/Code/college/database_lectures/server","watchOptions":{"ignored":[null]}}));
storage.mount('pinceau', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/sebastian/Documents/Code/college/database_lectures/.nuxt/pinceau/theme"}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/Users/sebastian/Documents/Code/college/database_lectures/content"}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/sebastian/Documents/Code/college/database_lectures/.nuxt/content-cache"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/sebastian/Documents/Code/college/database_lectures/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/sebastian/Documents/Code/college/database_lectures/.nuxt/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  docus: {
    title: "Database Lectures",
    description: "Learn databases the right way.",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e656a6222c3.png",
    socials: {
      twitter: "",
      github: ""
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
});

const appConfig1 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    url: "https://docus.dev",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      dir: void 0,
      branch: void 0,
      repo: void 0,
      owner: void 0,
      edit: false
    }
  }
});

const appConfig2 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});

const appConfig3 = defineAppConfig({});

const inlineAppConfig = {
  "nuxt": {}
};

const appConfig = defuFn(appConfig0, appConfig1, appConfig2, appConfig3, inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "181065a3-aec3-4d28-91c3-38afc5306f82",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/search": {
        "prerender": true,
        "cache": {}
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "studio": {
      "apiURL": "https://api.nuxt.studio",
      "iframeMessagingAllowedOrigins": ""
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1771319986144,
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": [
          "icon",
          "titleTemplate",
          "header",
          "main",
          "aside",
          "footer",
          "layout"
        ]
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "theme": {
          "dark": "github-dark",
          "default": "github-light"
        },
        "preload": [
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ],
        "highlighter": "shiki",
        "shikiEngine": "oniguruma",
        "langs": [
          "js",
          "jsx",
          "json",
          "ts",
          "tsx",
          "vue",
          "css",
          "html",
          "bash",
          "md",
          "mdc",
          "yaml",
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ]
      },
      "wsUrl": "",
      "documentDriven": {
        "page": true,
        "navigation": true,
        "surround": true,
        "globals": {},
        "layoutFallbacks": [
          "theme"
        ],
        "injectPage": true
      },
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "pinceau": {
    "studio": true,
    "outputDir": "/Users/sebastian/Documents/Code/college/database_lectures/.nuxt/pinceau/"
  },
  "studio": {
    "version": "2.2.1",
    "publicToken": "",
    "gitInfo": {
      "name": "dbms_lectures",
      "owner": "sebastian-uzhnu",
      "url": "https://uzhnu/sebastian-uzhnu/dbms_lectures"
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "4q9TnkKRqO",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ],
      "highlighter": "shiki",
      "shikiEngine": "oniguruma",
      "langs": [
        "js",
        "jsx",
        "json",
        "ts",
        "tsx",
        "vue",
        "css",
        "html",
        "bash",
        "md",
        "mdc",
        "yaml",
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ]
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": [
        "icon",
        "titleTemplate",
        "header",
        "main",
        "aside",
        "footer",
        "layout"
      ]
    },
    "contentHead": true,
    "documentDriven": true,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  },
  "appConfigSchema": {
    "properties": {
      "id": "#appConfig",
      "properties": {
        "nuxtIcon": {
          "title": "Nuxt Icon",
          "description": "Configure the defaults of Nuxt Icon",
          "id": "#appConfig/nuxtIcon",
          "properties": {
            "size": {
              "title": "Icon Size",
              "description": "Set the default icon size. Set to false to disable the sizing of icon in style.",
              "tags": [
                "@studioIcon material-symbols:format-size-rounded"
              ],
              "tsType": "string | false",
              "id": "#appConfig/nuxtIcon/size",
              "default": "1em",
              "type": "string"
            },
            "class": {
              "title": "CSS Class",
              "description": "Set the default CSS class",
              "tags": [
                "@studioIcon material-symbols:css"
              ],
              "id": "#appConfig/nuxtIcon/class",
              "default": "",
              "type": "string"
            },
            "aliases": {
              "title": "Icon aliases",
              "description": "Define Icon aliases to update them easily without code changes.",
              "tags": [
                "@studioIcon material-symbols:star-rounded",
                "@studioInputObjectValueType icon"
              ],
              "tsType": "{ [alias: string]: string }",
              "id": "#appConfig/nuxtIcon/aliases",
              "default": {},
              "type": "object"
            }
          },
          "type": "object",
          "default": {
            "size": "1em",
            "class": "",
            "aliases": {}
          }
        },
        "prose": {
          "title": "Prose configuration from Nuxt Typography",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:short-text-rounded",
            "@studioInput icon"
          ],
          "id": "#appConfig/prose",
          "properties": {
            "copyButton": {
              "title": "Copy button (used in code blocks)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:content-copy"
              ],
              "id": "#appConfig/prose/copyButton",
              "properties": {
                "iconCopy": {
                  "title": "Icon displayed to copy",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopy",
                  "default": "ph:copy",
                  "type": "string"
                },
                "iconCopied": {
                  "title": "Icon displayed when copied",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopied",
                  "default": "ph:check",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "iconCopy": "ph:copy",
                "iconCopied": "ph:check"
              }
            },
            "headings": {
              "title": "Default configuration for all headings (h1, h2, h3, h4, h5 and h6)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/prose/headings",
              "properties": {
                "icon": {
                  "title": "Default icon for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/headings/icon",
                  "default": "ph:link",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": "ph:link"
              }
            },
            "h1": {
              "title": "First heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h1"
              ],
              "id": "#appConfig/prose/h1",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h1/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h2": {
              "title": "Second heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h2"
              ],
              "id": "#appConfig/prose/h2",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h2/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h3": {
              "title": "Third heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h3"
              ],
              "id": "#appConfig/prose/h3",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h3/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h4": {
              "title": "Fourth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h4"
              ],
              "id": "#appConfig/prose/h4",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h4/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h5": {
              "title": "Fifth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h5"
              ],
              "id": "#appConfig/prose/h5",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h5/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h6": {
              "title": "Sixth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h6"
              ],
              "id": "#appConfig/prose/h6",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h6/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            }
          },
          "type": "object",
          "default": {
            "copyButton": {
              "iconCopy": "ph:copy",
              "iconCopied": "ph:check"
            },
            "headings": {
              "icon": "ph:link"
            },
            "h1": {
              "icon": ""
            },
            "h2": {
              "icon": ""
            },
            "h3": {
              "icon": ""
            },
            "h4": {
              "icon": ""
            },
            "h5": {
              "icon": ""
            },
            "h6": {
              "icon": ""
            }
          }
        },
        "docus": {
          "title": "Docus theme configuration.",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:docs"
          ],
          "id": "#appConfig/docus",
          "properties": {
            "title": {
              "title": "Website title, used as header default title and meta title.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/docus/title",
              "default": "Docus",
              "type": "string"
            },
            "titleTemplate": {
              "title": "The website title template, to overwrite the default one.",
              "description": "",
              "tags": [],
              "id": "#appConfig/docus/titleTemplate",
              "default": "%s · Docus",
              "type": "string"
            },
            "description": {
              "title": "Website description, used for meta description.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:description"
              ],
              "id": "#appConfig/docus/description",
              "default": "The best place to start your documentation.",
              "type": "string"
            },
            "image": {
              "title": "Cover image.",
              "description": "",
              "tags": [
                "@example '/cover.jpg'",
                "@studioIcon dashicons:cover-image",
                "@studioInput file"
              ],
              "id": "#appConfig/docus/image",
              "default": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
              "type": "string"
            },
            "socials": {
              "title": "Social links",
              "description": "Will be used in AppSocialIcons component.",
              "tags": [
                "@studioIcon material-symbols:share-outline"
              ],
              "id": "#appConfig/docus/socials",
              "properties": {
                "twitter": {
                  "title": "Twitter social handle",
                  "description": "",
                  "tags": [
                    "@example 'nuxt_js'",
                    "@studioIcon simple-icons:twitter"
                  ],
                  "id": "#appConfig/docus/socials/twitter",
                  "default": "",
                  "type": "string"
                },
                "github": {
                  "title": "GitHub org or repository",
                  "description": "",
                  "tags": [
                    "@example 'nuxt/framework'",
                    "@studioIcon simple-icons:github"
                  ],
                  "id": "#appConfig/docus/socials/github",
                  "default": "",
                  "type": "string"
                },
                "facebook": {
                  "title": "Facebook page url",
                  "description": "",
                  "tags": [
                    "@example https://www.facebook.com/groups/nuxtjs",
                    "@studioIcon simple-icons:facebook"
                  ],
                  "id": "#appConfig/docus/socials/facebook",
                  "default": "",
                  "type": "string"
                },
                "instagram": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.instagram.com/wearenuxt",
                    "@studioIcon simple-icons:instagram"
                  ],
                  "id": "#appConfig/docus/socials/instagram",
                  "default": "",
                  "type": "string"
                },
                "tiktok": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.youtube.com/@NuxtLabs",
                    "@studioIcon simple-icons:youtube"
                  ],
                  "id": "#appConfig/docus/socials/tiktok",
                  "default": "",
                  "type": "string"
                },
                "youtube": {
                  "title": "TikTok page url",
                  "description": "",
                  "tags": [
                    "@example https://www.tiktok.com/@tiktok",
                    "@studioIcon simple-icons:tiktok"
                  ],
                  "id": "#appConfig/docus/socials/youtube",
                  "default": "",
                  "type": "string"
                },
                "medium": {
                  "title": "Medium page url",
                  "description": "",
                  "tags": [
                    "@example https://medium.com/nuxt",
                    "@studioIcon simple-icons:medium"
                  ],
                  "id": "#appConfig/docus/socials/medium",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "twitter": "",
                "github": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "youtube": "",
                "medium": ""
              }
            },
            "layout": {
              "title": "Theme layout configuration.",
              "description": "",
              "tags": [
                "@studioIcon tabler:arrow-autofit-width"
              ],
              "tsType": "'default'|'page'",
              "id": "#appConfig/docus/layout",
              "default": "default",
              "type": "string"
            },
            "aside": {
              "title": "Aside navigation configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-page-24-regular"
              ],
              "id": "#appConfig/docus/aside",
              "properties": {
                "level": {
                  "title": "Aside navigation level",
                  "description": "Use 0 to disable all nesting. Use 1 and more to display nested navigation in header and aside navigation.",
                  "tags": [],
                  "id": "#appConfig/docus/aside/level",
                  "default": 0,
                  "type": "number"
                },
                "collapsed": {
                  "title": "Specify if default collapsibles state globally for aside navigation.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/aside/collapsed",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from aside navigation.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/aside/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                }
              },
              "type": "object",
              "default": {
                "level": 0,
                "collapsed": false,
                "exclude": []
              }
            },
            "header": {
              "title": "Header configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-24-regular"
              ],
              "id": "#appConfig/docus/header",
              "properties": {
                "title": {
                  "title": "Website title",
                  "description": "Title to be displayed in header or as aria-label if logo is defined.\nDefault to docus.title",
                  "tags": [
                    "@studioIcon material-symbols:title"
                  ],
                  "id": "#appConfig/docus/header/title",
                  "default": "",
                  "type": "string"
                },
                "logo": {
                  "title": "Logo configuration",
                  "description": "Boolean to disable or use the `Logo.vue` component.\nString to be used as a name of a component.\nObject that sets the light and dark logos.",
                  "tags": [
                    "@example 'MyLogo'",
                    "@studioInput boolean"
                  ],
                  "tsType": "boolean|string|{dark: string, light: string}",
                  "id": "#appConfig/docus/header/logo",
                  "default": false,
                  "type": "boolean"
                },
                "showLinkIcon": {
                  "title": "Header links",
                  "description": "Toggle links icons in the header.",
                  "tags": [],
                  "id": "#appConfig/docus/header/showLinkIcon",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from header links.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/header/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                },
                "fluid": {
                  "title": "Makes the content of the header fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/header/fluid",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "title": "",
                "logo": false,
                "showLinkIcon": false,
                "exclude": [],
                "fluid": false
              }
            },
            "main": {
              "title": "Main content configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-footer-24-filled"
              ],
              "id": "#appConfig/docus/main",
              "properties": {
                "fluid": {
                  "title": "Makes the content of the main container fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/fluid",
                  "default": false,
                  "type": "boolean"
                },
                "padded": {
                  "title": "Makes the content of the main container padded.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/padded",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "fluid": false,
                "padded": true
              }
            },
            "footer": {
              "title": "Footer configuration",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-footer-24-regular"
              ],
              "id": "#appConfig/docus/footer",
              "properties": {
                "credits": {
                  "title": "Website credits configuration.",
                  "description": "",
                  "tags": [
                    "@studioIcon material-symbols:copyright"
                  ],
                  "tsType": "false|{icon: string, text: string, href: string}",
                  "id": "#appConfig/docus/footer/credits",
                  "properties": {
                    "icon": {
                      "title": "Icon to show on credits",
                      "description": "",
                      "tags": [
                        "@formtype Icon"
                      ],
                      "id": "#appConfig/docus/footer/credits/icon",
                      "default": "IconDocus",
                      "type": "string"
                    },
                    "text": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/text",
                      "default": "Powered by Docus"
                    },
                    "href": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/href",
                      "default": "https://docus.dev"
                    }
                  },
                  "type": "object",
                  "default": {
                    "icon": "IconDocus",
                    "text": "Powered by Docus",
                    "href": "https://docus.dev"
                  }
                },
                "textLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "text",
                      "href"
                    ],
                    "properties": {
                      "href": {
                        "type": "string",
                        "description": "URL when clicking the link"
                      },
                      "text": {
                        "type": "string",
                        "description": "Text of the link"
                      },
                      "target": {
                        "type": "string",
                        "description": "Target attribute of the link"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Text links",
                  "description": "Will be added into center section of the footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/textLinks"
                },
                "iconLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "icon",
                      "href"
                    ],
                    "properties": {
                      "icon": {
                        "type": "string",
                        "description": "Icon name"
                      },
                      "href": {
                        "type": "string",
                        "description": "Link when clicking on the icon"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label of the icon"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Icon links",
                  "description": "Icons to be added to Social Icons in footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/iconLinks"
                },
                "fluid": {
                  "title": "Makes the content of the footer fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/footer/fluid",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "credits": {
                  "icon": "IconDocus",
                  "text": "Powered by Docus",
                  "href": "https://docus.dev"
                },
                "fluid": true
              }
            },
            "github": {
              "title": "GitHub integration",
              "description": "Configure the Edit on Github integration.",
              "tags": [
                "@studioIcon simple-icons:github"
              ],
              "id": "#appConfig/docus/github",
              "properties": {
                "baseUrl": {
                  "title": "Base URL",
                  "description": "You can use this to link to GitHub Enterprise.",
                  "tags": [],
                  "id": "#appConfig/docus/github/baseUrl",
                  "default": "https://github.com",
                  "type": "string"
                },
                "dir": {
                  "title": "Directory",
                  "description": "Your GitHub repository root directory.",
                  "tags": [],
                  "id": "#appConfig/docus/github/dir",
                  "default": "",
                  "type": "string"
                },
                "branch": {
                  "title": "Branch",
                  "description": "Your GitHub repository branch.",
                  "tags": [],
                  "id": "#appConfig/docus/github/branch",
                  "default": "",
                  "type": "string"
                },
                "repo": {
                  "title": "Repository",
                  "description": "Your GitHub repository name.",
                  "tags": [],
                  "id": "#appConfig/docus/github/repo",
                  "default": "",
                  "type": "string"
                },
                "owner": {
                  "title": "Owner",
                  "description": "Your GitHub repository owner.",
                  "tags": [],
                  "id": "#appConfig/docus/github/owner",
                  "default": "",
                  "type": "string"
                },
                "edit": {
                  "title": "EditOnGithub",
                  "description": "Display EditOnGithub button.",
                  "tags": [],
                  "id": "#appConfig/docus/github/edit",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "baseUrl": "https://github.com",
                "dir": "",
                "branch": "",
                "repo": "",
                "owner": "",
                "edit": false
              }
            }
          },
          "type": "object",
          "default": {
            "title": "Docus",
            "titleTemplate": "%s · Docus",
            "description": "The best place to start your documentation.",
            "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
            "socials": {
              "twitter": "",
              "github": "",
              "facebook": "",
              "instagram": "",
              "tiktok": "",
              "youtube": "",
              "medium": ""
            },
            "layout": "default",
            "aside": {
              "level": 0,
              "collapsed": false,
              "exclude": []
            },
            "header": {
              "title": "",
              "logo": false,
              "showLinkIcon": false,
              "exclude": [],
              "fluid": false
            },
            "main": {
              "fluid": false,
              "padded": true
            },
            "footer": {
              "credits": {
                "icon": "IconDocus",
                "text": "Powered by Docus",
                "href": "https://docus.dev"
              },
              "fluid": true
            },
            "github": {
              "baseUrl": "https://github.com",
              "dir": "",
              "branch": "",
              "repo": "",
              "owner": "",
              "edit": false
            }
          }
        }
      },
      "type": "object",
      "default": {
        "nuxtIcon": {
          "size": "1em",
          "class": "",
          "aliases": {}
        },
        "prose": {
          "copyButton": {
            "iconCopy": "ph:copy",
            "iconCopied": "ph:check"
          },
          "headings": {
            "icon": "ph:link"
          },
          "h1": {
            "icon": ""
          },
          "h2": {
            "icon": ""
          },
          "h3": {
            "icon": ""
          },
          "h4": {
            "icon": ""
          },
          "h5": {
            "icon": ""
          },
          "h6": {
            "icon": ""
          }
        },
        "docus": {
          "title": "Docus",
          "titleTemplate": "%s · Docus",
          "description": "The best place to start your documentation.",
          "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
          "socials": {
            "twitter": "",
            "github": "",
            "facebook": "",
            "instagram": "",
            "tiktok": "",
            "youtube": "",
            "medium": ""
          },
          "layout": "default",
          "aside": {
            "level": 0,
            "collapsed": false,
            "exclude": []
          },
          "header": {
            "title": "",
            "logo": false,
            "showLinkIcon": false,
            "exclude": [],
            "fluid": false
          },
          "main": {
            "fluid": false,
            "padded": true
          },
          "footer": {
            "credits": {
              "icon": "IconDocus",
              "text": "Powered by Docus",
              "href": "https://docus.dev"
            },
            "fluid": true
          },
          "github": {
            "baseUrl": "https://github.com",
            "dir": "",
            "branch": "",
            "repo": "",
            "owner": "",
            "edit": false
          }
        }
      }
    },
    "default": {
      "nuxtIcon": {
        "size": "1em",
        "class": "",
        "aliases": {}
      },
      "prose": {
        "copyButton": {
          "iconCopy": "ph:copy",
          "iconCopied": "ph:check"
        },
        "headings": {
          "icon": "ph:link"
        },
        "h1": {
          "icon": ""
        },
        "h2": {
          "icon": ""
        },
        "h3": {
          "icon": ""
        },
        "h4": {
          "icon": ""
        },
        "h5": {
          "icon": ""
        },
        "h6": {
          "icon": ""
        }
      },
      "docus": {
        "title": "Docus",
        "titleTemplate": "%s · Docus",
        "description": "The best place to start your documentation.",
        "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
        "socials": {
          "twitter": "",
          "github": "",
          "facebook": "",
          "instagram": "",
          "tiktok": "",
          "youtube": "",
          "medium": ""
        },
        "layout": "default",
        "aside": {
          "level": 0,
          "collapsed": false,
          "exclude": []
        },
        "header": {
          "title": "",
          "logo": false,
          "showLinkIcon": false,
          "exclude": [],
          "fluid": false
        },
        "main": {
          "fluid": false,
          "padded": true
        },
        "footer": {
          "credits": {
            "icon": "IconDocus",
            "text": "Powered by Docus",
            "href": "https://docus.dev"
          },
          "fluid": true
        },
        "github": {
          "baseUrl": "https://github.com",
          "dir": "",
          "branch": "",
          "repo": "",
          "owner": "",
          "edit": false
        }
      }
    }
  },
  "contentSchema": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const nitro = (async function(nitro) {
  nitro.hooks.hook("render:html", async (htmlContext, { event }) => {
    const theme = await useStorage().getItem("pinceau:index.css");
    const pinceauContent = event?.pinceauContent || { runtime: void 0 };
    if (!theme?.runtime) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-runtime-hydratable">${pinceauContent.runtime}</style>`);
    }
    if (!theme?.theme) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-theme">${theme}</style>`);
    }
  });
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"theme\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"theme\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _TohVf4YuBhZQrRCdYFlqsopC02lcRTAt4QuDx0qE87Y = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_TohVf4YuBhZQrRCdYFlqsopC02lcRTAt4QuDx0qE87Y
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(import.meta.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _imZ59f = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

function baseURL() {
  return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/\{([^}]*)\}/);
  const filenameMatches = lang.match(/\[((\\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => Number.parseInt(i));
    }
  }
  return props;
};

function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && node.content?.children.length ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (!/^\n+$/.test(node.value || "") || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    body.children = (body.children || []).filter((child) => child.type !== "text");
    return {
      body,
      excerpt
    };
  };
}

let moduleOptions;
let generatedMdcConfigs;
const createMarkdownParser = async (inlineOptions = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      '../build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await import(
      '../build/mdc-configs.mjs'
      /* @vite-ignore */
    ).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu$1(inlineOptions, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs) {
    processor = await config.unified?.pre?.(processor) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs) {
    processor = await config.unified?.remark?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  for (const config of mdcConfigs) {
    processor = await config.unified?.rehype?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs) {
    processor = await config.unified?.post?.(processor) || processor;
  }
  return async function parse(md, { fileOptions } = {}) {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const processedFile = await processor.process({ ...fileOptions, value: content, data: frontmatter });
    const result = processedFile.result;
    const data = Object.assign(
      contentHeading(result.body),
      frontmatter,
      processedFile?.data || {}
    );
    let toc;
    if (data.toc !== false) {
      const tocOption = defu$1(data.toc || {}, options.toc);
      toc = generateToc(result.body, tocOption);
    }
    return {
      data,
      body: result.body,
      excerpt: result.excerpt,
      toc
    };
  };
};
const parseMarkdown = async (md, markdownParserOptions = {}, parseOptions = {}) => {
  const parser = await createMarkdownParser(markdownParserOptions);
  return parser(md, parseOptions);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const components = {
  "AppDocSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "pascalName": "AppDocSearch",
    "kebabName": "app-doc-search",
    "chunkName": "components/app-doc-search",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppFooter": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "pascalName": "AppFooter",
    "kebabName": "app-footer",
    "chunkName": "components/app-footer",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "pascalName": "AppHeader",
    "kebabName": "app-header",
    "chunkName": "components/app-header",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderDialog": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "pascalName": "AppHeaderDialog",
    "kebabName": "app-header-dialog",
    "chunkName": "components/app-header-dialog",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderLogo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "pascalName": "AppHeaderLogo",
    "kebabName": "app-header-logo",
    "chunkName": "components/app-header-logo",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "pascalName": "AppHeaderNavigation",
    "kebabName": "app-header-navigation",
    "chunkName": "components/app-header-navigation",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "pascalName": "AppLayout",
    "kebabName": "app-layout",
    "chunkName": "components/app-layout",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "AppLoadingBar": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "pascalName": "AppLoadingBar",
    "kebabName": "app-loading-bar",
    "chunkName": "components/app-loading-bar",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "schema": "number",
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "schema": "number",
          "default": "2000"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "throttle",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "duration",
          "type": "number",
          "description": "",
          "schema": "number"
        }
      ]
    }
  },
  "AppSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "pascalName": "AppSearch",
    "kebabName": "app-search",
    "chunkName": "components/app-search",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "fuse",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "{\n    fuseOptions: {\n        keys: [\n            \"title\",\n            \"description\",\n            \"keywords\",\n            \"body\"\n        ],\n        ignoreLocation: true,\n        threshold: 0,\n        includeMatches: true,\n        includeScore: true,\n    },\n    matchAllWhenSearchEmpty: true\n}"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "fuse",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "AppSocialIcons": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "pascalName": "AppSocialIcons",
    "kebabName": "app-social-icons",
    "chunkName": "components/app-social-icons",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Ellipsis": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "pascalName": "Ellipsis",
    "kebabName": "ellipsis",
    "chunkName": "components/ellipsis",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "blur",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"50px\""
        },
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"10rem\""
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"10rem\""
        },
        {
          "name": "zIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"10\""
        },
        {
          "name": "top",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"0\""
        },
        {
          "name": "left",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"auto\""
        },
        {
          "name": "right",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"auto\""
        },
        {
          "name": "colors",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          },
          "default": "[\"rgba(0, 71, 225, 0.22)\", \"rgba(26, 214, 255, 0.22)\", \"rgba(0, 220, 130, 0.22)\"]"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "blur",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "width",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "height",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "zIndex",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "top",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "left",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "right",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "colors",
          "type": "string[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          }
        }
      ]
    }
  },
  "Logo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "pascalName": "Logo",
    "kebabName": "logo",
    "chunkName": "components/logo",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ThemeSelect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "pascalName": "ThemeSelect",
    "kebabName": "theme-select",
    "chunkName": "components/theme-select",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAside": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "pascalName": "DocsAside",
    "kebabName": "docs-aside",
    "chunkName": "components/docs-aside",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAsideTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "pascalName": "DocsAsideTree",
    "kebabName": "docs-aside-tree",
    "chunkName": "components/docs-aside-tree",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "[]"
        },
        {
          "name": "level",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "schema": "number",
          "default": "0"
        },
        {
          "name": "max",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "schema": "number",
          "default": "null"
        },
        {
          "name": "parent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "links",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "level",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "max",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "parent",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "DocsPageBottom": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "pascalName": "DocsPageBottom",
    "kebabName": "docs-page-bottom",
    "chunkName": "components/docs-page-bottom",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "pascalName": "DocsPageLayout",
    "kebabName": "docs-page-layout",
    "chunkName": "components/docs-page-layout",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "DocsPrevNext": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "pascalName": "DocsPrevNext",
    "kebabName": "docs-prev-next",
    "chunkName": "components/docs-prev-next",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsToc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "pascalName": "DocsToc",
    "kebabName": "docs-toc",
    "chunkName": "components/docs-toc",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "move",
          "description": "",
          "tags": [],
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onMove",
          "type": "(...args: any[]) => any",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": {
              "0": "any"
            }
          }
        }
      ]
    }
  },
  "DocsTocLinks": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "pascalName": "DocsTocLinks",
    "kebabName": "docs-toc-links",
    "chunkName": "components/docs-toc-links",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "TocLink[]",
          "schema": {
            "kind": "array",
            "type": "TocLink[]",
            "schema": {
              "0": {
                "kind": "array",
                "type": "TocLink",
                "schema": []
              }
            }
          },
          "default": "[]"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "move",
          "description": "",
          "tags": [],
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "links",
          "type": "TocLink[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "TocLink[]",
            "schema": {
              "0": {
                "kind": "array",
                "type": "TocLink",
                "schema": []
              }
            }
          }
        },
        {
          "name": "onMove",
          "type": "(...args: any[]) => any",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": {
              "0": "any"
            }
          }
        }
      ]
    }
  },
  "EditOnLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "pascalName": "EditOnLink",
    "kebabName": "edit-on-link",
    "chunkName": "components/edit-on-link",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "baseUrl",
          "global": false,
          "description": "GitHub base URL.",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.baseUrl || \"https://github.com\""
        },
        {
          "name": "owner",
          "global": false,
          "description": "Repository owner.",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.owner"
        },
        {
          "name": "repo",
          "global": false,
          "description": "Repository name.",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.repo"
        },
        {
          "name": "branch",
          "global": false,
          "description": "The branch to use for the edit link.",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.branch"
        },
        {
          "name": "dir",
          "global": false,
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.dir"
        },
        {
          "name": "source",
          "global": false,
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "page",
          "global": false,
          "description": "Use page from",
          "tags": [
            {
              "name": "nuxt",
              "text": "/content."
            }
          ],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "undefined"
        },
        {
          "name": "contentDir",
          "global": false,
          "description": "Content directory (to be used with `page`)",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.dir || \"content\""
        },
        {
          "name": "edit",
          "global": false,
          "description": "Send to an edit page or not.",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          },
          "default": "useAppConfig()?.docus?.github?.edit"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "baseUrl",
          "type": "string",
          "description": "GitHub base URL.",
          "schema": "string"
        },
        {
          "name": "owner",
          "type": "string",
          "description": "Repository owner.",
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "Repository name.",
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "The branch to use for the edit link.",
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "schema": "string"
        },
        {
          "name": "source",
          "type": "string",
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "schema": "string"
        },
        {
          "name": "page",
          "type": "any",
          "description": "Use page from",
          "schema": "any"
        },
        {
          "name": "contentDir",
          "type": "string",
          "description": "Content directory (to be used with `page`)",
          "schema": "string"
        },
        {
          "name": "edit",
          "type": "boolean",
          "description": "Send to an edit page or not.",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "url",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "SourceLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "pascalName": "SourceLink",
    "kebabName": "source-link",
    "chunkName": "components/source-link",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "source",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "source",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "undefined"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "target",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Lang",
          "schema": {
            "kind": "array",
            "type": "Lang",
            "schema": {}
          },
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[]",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": {
              "0": "number"
            }
          },
          "default": "[]"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "language",
          "type": "Lang",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "Lang",
            "schema": {}
          }
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": {
              "0": "number"
            }
          }
        }
      ]
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number",
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": {
              "0": "string",
              "1": "number"
            }
          },
          "default": "undefined"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number",
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": {
              "0": "string",
              "1": "number"
            }
          },
          "default": "undefined"
        },
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "width",
          "type": "string | number",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": {
              "0": "string",
              "1": "number"
            }
          }
        },
        {
          "name": "height",
          "type": "string | number",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": {
              "0": "string",
              "1": "number"
            }
          }
        },
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "Alert": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "pascalName": "Alert",
    "kebabName": "alert",
    "chunkName": "components/alert",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: { unwrap: string; }) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: { unwrap: string; }) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "Badge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "pascalName": "Badge",
    "kebabName": "badge",
    "chunkName": "components/badge",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: { unwrap: string; }) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: { unwrap: string; }) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ButtonLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "pascalName": "ButtonLink",
    "kebabName": "button-link",
    "chunkName": "components/button-link",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: { unwrap: string; }) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: { unwrap: string; }) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"info\""
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "ref(false)"
        }
      ],
      "slots": [
        {
          "name": "summary",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "content",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:modelValue",
          "description": "",
          "tags": [],
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { summary?: (props: {}) => any; } & { content?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { summary?: (props: {}) => any; } & { content?: (props: {}) => any; }",
            "schema": {
              "summary": {
                "name": "summary",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              },
              "content": {
                "name": "content",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "modelValue",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": {
              "0": "any"
            }
          }
        }
      ]
    }
  },
  "CodeBlock": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "pascalName": "CodeBlock",
    "kebabName": "code-block",
    "chunkName": "components/code-block",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "Label to display for the tab",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "active",
          "global": false,
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          },
          "default": "false"
        },
        {
          "name": "preview",
          "global": false,
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "active",
          "type": "boolean",
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "preview",
          "type": "boolean",
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "label",
          "type": "string",
          "description": "Label to display for the tab",
          "schema": "string"
        }
      ]
    }
  },
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Container": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "pascalName": "Container",
    "kebabName": "container",
    "chunkName": "components/container",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "CopyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "pascalName": "CopyButton",
    "kebabName": "copy-button",
    "chunkName": "components/copy-button",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "List": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "pascalName": "List",
    "kebabName": "list",
    "chunkName": "components/list",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "pascalName": "NuxtImg",
    "kebabName": "nuxt-img",
    "chunkName": "components/nuxt-img",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Props": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "pascalName": "Props",
    "kebabName": "props",
    "chunkName": "components/props",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Sandbox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "pascalName": "Sandbox",
    "kebabName": "sandbox",
    "chunkName": "components/sandbox",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "repo",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "branch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "dir",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "file",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"app.vue\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "file",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "TabsHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "pascalName": "TabsHeader",
    "kebabName": "tabs-header",
    "chunkName": "components/tabs-header",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "tabs",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "{ label: string; }[]",
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": {
              "0": {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  }
                }
              }
            }
          }
        },
        {
          "name": "activeTabIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "number",
          "schema": "number"
        }
      ],
      "slots": [
        {
          "name": "footer",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:activeTabIndex",
          "description": "",
          "tags": [],
          "type": "any[]",
          "signature": "(event: \"update:activeTabIndex\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { footer?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { footer?: (props: {}) => any; }",
            "schema": {
              "footer": {
                "name": "footer",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "tabs",
          "type": "{ label: string; }[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": {
              "0": {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  }
                }
              }
            }
          }
        },
        {
          "name": "activeTabIndex",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "onUpdate:activeTabIndex",
          "type": "(...args: any[]) => any",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": {
              "0": "any"
            }
          }
        }
      ]
    }
  },
  "Terminal": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "pascalName": "Terminal",
    "kebabName": "terminal",
    "chunkName": "components/terminal",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string | string[]",
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": {
              "0": "string",
              "1": {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string | string[]",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": {
              "0": "string",
              "1": {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            }
          }
        }
      ]
    }
  },
  "VideoPlayer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "pascalName": "VideoPlayer",
    "kebabName": "video-player",
    "chunkName": "components/video-player",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "poster",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "sources",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any[]",
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": {
              "0": "any"
            }
          },
          "default": "[]"
        },
        {
          "name": "autoplay",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "poster",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "sources",
          "type": "any[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": {
              "0": "any"
            }
          }
        },
        {
          "name": "autoplay",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        }
      ]
    }
  },
  "IconCodeSandBox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "pascalName": "IconCodeSandBox",
    "kebabName": "icon-code-sand-box",
    "chunkName": "components/icon-code-sand-box",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconDocus": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "pascalName": "IconDocus",
    "kebabName": "icon-docus",
    "chunkName": "components/icon-docus",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxt": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "pascalName": "IconNuxt",
    "kebabName": "icon-nuxt",
    "chunkName": "components/icon-nuxt",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "pascalName": "IconNuxtContent",
    "kebabName": "icon-nuxt-content",
    "chunkName": "components/icon-nuxt-content",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtLabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "pascalName": "IconNuxtLabs",
    "kebabName": "icon-nuxt-labs",
    "chunkName": "components/icon-nuxt-labs",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtStudio": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "pascalName": "IconNuxtStudio",
    "kebabName": "icon-nuxt-studio",
    "chunkName": "components/icon-nuxt-studio",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconStackBlitz": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "pascalName": "IconStackBlitz",
    "kebabName": "icon-stack-blitz",
    "chunkName": "components/icon-stack-blitz",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconVueTelescope": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "pascalName": "IconVueTelescope",
    "kebabName": "icon-vue-telescope",
    "chunkName": "components/icon-vue-telescope",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "BlockHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "pascalName": "BlockHero",
    "kebabName": "block-hero",
    "chunkName": "components/block-hero",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "cta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          },
          "default": "[]"
        },
        {
          "name": "secondary",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          },
          "default": "[]"
        },
        {
          "name": "video",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "snippet",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | string[]",
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": {
              "0": "string",
              "1": {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            }
          },
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "announce",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "title",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "description",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "extra",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "actions",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "support",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { announce?: (props: { unwrap: string; }) => any; } & { title?: (props: { unwrap: string; }) => any; } & { description?: (props: { unwrap: string; }) => any; } & { ...; } & { ...; } & { ...; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { announce?: (props: { unwrap: string; }) => any; } & { title?: (props: { unwrap: string; }) => any; } & { description?: (props: { unwrap: string; }) => any; } & { ...; } & { ...; } & { ...; }",
            "schema": {
              "announce": {
                "name": "announce",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              },
              "description": {
                "name": "description",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              },
              "extra": {
                "name": "extra",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              },
              "actions": {
                "name": "actions",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              },
              "support": {
                "name": "support",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "cta",
          "type": "string[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          }
        },
        {
          "name": "secondary",
          "type": "string[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          }
        },
        {
          "name": "video",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "snippet",
          "type": "string | string[]",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": {
              "0": "string",
              "1": {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            }
          }
        }
      ]
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "description",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; } & { title?: (props: { unwrap: string; }) => any; } & { description?: (props: { unwrap: string; }) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; } & { title?: (props: { unwrap: string; }) => any; } & { description?: (props: { unwrap: string; }) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              },
              "description": {
                "name": "description",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "CardGrid": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "pascalName": "CardGrid",
    "kebabName": "card-grid",
    "chunkName": "components/card-grid",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"Features\""
        }
      ],
      "slots": [
        {
          "name": "root",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{ unwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        },
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { root?: (props: {}) => any; } & { title?: (props: { unwrap: string; }) => any; } & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { root?: (props: {}) => any; } & { title?: (props: { unwrap: string; }) => any; } & { default?: (props: {}) => any; }",
            "schema": {
              "root": {
                "name": "root",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: { unwrap: string; }) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: { unwrap: string; }): any",
                  "schema": {}
                }
              },
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "title",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "VoltaBoard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "pascalName": "VoltaBoard",
    "kebabName": "volta-board",
    "chunkName": "components/volta-board",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "token",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "token",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ComponentPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "pascalName": "ComponentPlayground",
    "kebabName": "component-playground",
    "chunkName": "components/component-playground",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundData": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "pascalName": "ComponentPlaygroundData",
    "kebabName": "component-playground-data",
    "chunkName": "components/component-playground-data",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "schema": "Record<string, any>",
          "default": "{}"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "description": "",
          "tags": [],
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": {
              "0": "any"
            }
          }
        }
      ]
    }
  },
  "ComponentPlaygroundProps": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "pascalName": "ComponentPlaygroundProps",
    "kebabName": "component-playground-props",
    "chunkName": "components/component-playground-props",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "description": "",
          "tags": [],
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": {
              "0": "any"
            }
          }
        }
      ]
    }
  },
  "ComponentPlaygroundSlots": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "pascalName": "ComponentPlaygroundSlots",
    "kebabName": "component-playground-slots",
    "chunkName": "components/component-playground-slots",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundTokens": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "pascalName": "ComponentPlaygroundTokens",
    "kebabName": "component-playground-tokens",
    "chunkName": "components/component-playground-tokens",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "PreviewLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "pascalName": "PreviewLayout",
    "kebabName": "preview-layout",
    "chunkName": "components/preview-layout",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        }
      ]
    }
  },
  "TokensPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "pascalName": "TokensPlayground",
    "kebabName": "tokens-playground",
    "chunkName": "components/tokens-playground",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams",
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": {
                    "0": "false",
                    "1": "true"
                  }
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": {
                    "0": "string"
                  }
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": {
                    "0": {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": {
                                  "0": "\"upper\"",
                                  "1": "\"lower\"",
                                  "2": "\"false\""
                                }
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": {
                                  "0": "\"base\"",
                                  "1": "\"accent\"",
                                  "2": "\"case\"",
                                  "3": "\"variant\""
                                }
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {}
                              },
                              "5": "QueryBuilderWhere"
                            }
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": "RegExp"
                            }
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "RegExp"
                            }
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or match every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "(string | number | boolean)[]"
                            }
                          }
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  }
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": {
                          "0": "string",
                          "1": "QueryBuilderWhere"
                        }
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "head",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
            "schema": {
              "doc": {
                "name": "doc",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent",
                "schema": {
                  "kind": "object",
                  "type": "ParsedContent",
                  "schema": {
                    "excerpt": {
                      "name": "excerpt",
                      "global": false,
                      "description": "Excerpt",
                      "tags": [],
                      "required": false,
                      "type": "MarkdownRoot",
                      "schema": {
                        "kind": "object",
                        "type": "MarkdownRoot",
                        "schema": {
                          "type": {
                            "name": "type",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "\"root\"",
                            "schema": "\"root\""
                          },
                          "children": {
                            "name": "children",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "MarkdownNode[]",
                            "schema": {
                              "kind": "array",
                              "type": "MarkdownNode[]",
                              "schema": {
                                "0": {
                                  "kind": "object",
                                  "type": "MarkdownNode",
                                  "schema": {
                                    "type": {
                                      "name": "type",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "tag": {
                                      "name": "tag",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "value": {
                                      "name": "value",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "props": {
                                      "name": "props",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "schema": "Record<string, any>"
                                    },
                                    "content": {
                                      "name": "content",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "any",
                                      "schema": "any"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "MarkdownNode[]",
                                      "schema": "MarkdownNode[]"
                                    },
                                    "attributes": {
                                      "name": "attributes",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "schema": "Record<string, any>"
                                    },
                                    "fmAttributes": {
                                      "name": "fmAttributes",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "schema": "Record<string, any>"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "props": {
                            "name": "props",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": false,
                            "type": "Record<string, any>",
                            "schema": "Record<string, any>"
                          },
                          "toc": {
                            "name": "toc",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": false,
                            "type": "Toc",
                            "schema": {
                              "kind": "object",
                              "type": "Toc",
                              "schema": {
                                "title": {
                                  "name": "title",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "string",
                                  "schema": "string"
                                },
                                "depth": {
                                  "name": "depth",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "number",
                                  "schema": "number"
                                },
                                "searchDepth": {
                                  "name": "searchDepth",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "number",
                                  "schema": "number"
                                },
                                "links": {
                                  "name": "links",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "TocLink[]",
                                  "schema": {
                                    "kind": "array",
                                    "type": "TocLink[]",
                                    "schema": {
                                      "0": {
                                        "kind": "object",
                                        "type": "TocLink",
                                        "schema": {
                                          "id": {
                                            "name": "id",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "string",
                                            "schema": "string"
                                          },
                                          "text": {
                                            "name": "text",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "string",
                                            "schema": "string"
                                          },
                                          "depth": {
                                            "name": "depth",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "number",
                                            "schema": "number"
                                          },
                                          "children": {
                                            "name": "children",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": false,
                                            "type": "TocLink[]",
                                            "schema": "TocLink[]"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "body": {
                      "name": "body",
                      "global": false,
                      "description": "Content body",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownRoot",
                      "schema": "MarkdownRoot"
                    },
                    "layout": {
                      "name": "layout",
                      "global": false,
                      "description": "Layout",
                      "tags": [],
                      "required": false,
                      "type": "LayoutKey",
                      "schema": {
                        "kind": "array",
                        "type": "LayoutKey",
                        "schema": {}
                      }
                    },
                    "_id": {
                      "name": "_id",
                      "global": false,
                      "description": "Content id",
                      "tags": [],
                      "required": true,
                      "type": "string",
                      "schema": "string"
                    },
                    "_source": {
                      "name": "_source",
                      "global": false,
                      "description": "Content source",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "schema": "string"
                    },
                    "_path": {
                      "name": "_path",
                      "global": false,
                      "description": "Content path, this path is source agnostic and it the content my live in any source",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "schema": "string"
                    },
                    "title": {
                      "name": "title",
                      "global": false,
                      "description": "Content title",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "schema": "string"
                    },
                    "_draft": {
                      "name": "_draft",
                      "global": false,
                      "description": "Content draft status",
                      "tags": [],
                      "required": false,
                      "type": "boolean",
                      "schema": {
                        "kind": "enum",
                        "type": "boolean",
                        "schema": {
                          "0": "false",
                          "1": "true"
                        }
                      }
                    },
                    "_partial": {
                      "name": "_partial",
                      "global": false,
                      "description": "Content partial status",
                      "tags": [],
                      "required": false,
                      "type": "boolean",
                      "schema": "boolean"
                    },
                    "_locale": {
                      "name": "_locale",
                      "global": false,
                      "description": "Content locale",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "schema": "string"
                    },
                    "_type": {
                      "name": "_type",
                      "global": false,
                      "description": "File type of the content, i.e `markdown`",
                      "tags": [],
                      "required": false,
                      "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                      "schema": {
                        "kind": "enum",
                        "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                        "schema": {
                          "0": "\"markdown\"",
                          "1": "\"yaml\"",
                          "2": "\"json\"",
                          "3": "\"csv\""
                        }
                      }
                    },
                    "_file": {
                      "name": "_file",
                      "global": false,
                      "description": "Path to the file relative to the content directory",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "schema": "string"
                    },
                    "_extension": {
                      "name": "_extension",
                      "global": false,
                      "description": "Extension of the file",
                      "tags": [],
                      "required": false,
                      "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                      "schema": {
                        "kind": "enum",
                        "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                        "schema": {
                          "0": "\"yaml\"",
                          "1": "\"json\"",
                          "2": "\"csv\"",
                          "3": "\"md\"",
                          "4": "\"yml\"",
                          "5": "\"json5\""
                        }
                      }
                    }
                  }
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "schema": {
                  "kind": "event",
                  "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "query",
          "type": "QueryBuilderParams",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": {
                    "0": "false",
                    "1": "true"
                  }
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": {
                    "0": "string"
                  }
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": {
                    "0": {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": {
                                  "0": "\"upper\"",
                                  "1": "\"lower\"",
                                  "2": "\"false\""
                                }
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": {
                                  "0": "\"base\"",
                                  "1": "\"accent\"",
                                  "2": "\"case\"",
                                  "3": "\"variant\""
                                }
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {}
                              },
                              "5": "QueryBuilderWhere"
                            }
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": "RegExp"
                            }
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "RegExp"
                            }
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or match every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "(string | number | boolean)[]"
                            }
                          }
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  }
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": {
                          "0": "string",
                          "1": "QueryBuilderWhere"
                        }
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "head",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "tag",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        }
      ]
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams",
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": {
                    "0": "false",
                    "1": "true"
                  }
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": {
                    "0": "string"
                  }
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": {
                    "0": {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": {
                                  "0": "\"upper\"",
                                  "1": "\"lower\"",
                                  "2": "\"false\""
                                }
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": {
                                  "0": "\"base\"",
                                  "1": "\"accent\"",
                                  "2": "\"case\"",
                                  "3": "\"variant\""
                                }
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {}
                              },
                              "5": "QueryBuilderWhere"
                            }
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": "RegExp"
                            }
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "RegExp"
                            }
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or match every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "(string | number | boolean)[]"
                            }
                          }
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  }
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": {
                          "0": "string",
                          "1": "QueryBuilderWhere"
                        }
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
            "schema": {
              "list": {
                "name": "list",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent[]",
                "schema": {
                  "kind": "array",
                  "type": "ParsedContent[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "ParsedContent",
                      "schema": {
                        "excerpt": {
                          "name": "excerpt",
                          "global": false,
                          "description": "Excerpt",
                          "tags": [],
                          "required": false,
                          "type": "MarkdownRoot",
                          "schema": {
                            "kind": "object",
                            "type": "MarkdownRoot",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "\"root\"",
                                "schema": "\"root\""
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "MarkdownNode[]",
                                "schema": {
                                  "kind": "array",
                                  "type": "MarkdownNode[]",
                                  "schema": {
                                    "0": {
                                      "kind": "object",
                                      "type": "MarkdownNode",
                                      "schema": {
                                        "type": {
                                          "name": "type",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "string",
                                          "schema": "string"
                                        },
                                        "tag": {
                                          "name": "tag",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "schema": "string"
                                        },
                                        "value": {
                                          "name": "value",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "schema": "string"
                                        },
                                        "props": {
                                          "name": "props",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "schema": "Record<string, any>"
                                        },
                                        "content": {
                                          "name": "content",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "any",
                                          "schema": "any"
                                        },
                                        "children": {
                                          "name": "children",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "MarkdownNode[]",
                                          "schema": "MarkdownNode[]"
                                        },
                                        "attributes": {
                                          "name": "attributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "schema": "Record<string, any>"
                                        },
                                        "fmAttributes": {
                                          "name": "fmAttributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "schema": "Record<string, any>"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "schema": "Record<string, any>"
                              },
                              "toc": {
                                "name": "toc",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Toc",
                                "schema": {
                                  "kind": "object",
                                  "type": "Toc",
                                  "schema": {
                                    "title": {
                                      "name": "title",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "schema": "number"
                                    },
                                    "searchDepth": {
                                      "name": "searchDepth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "schema": "number"
                                    },
                                    "links": {
                                      "name": "links",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "TocLink[]",
                                      "schema": {
                                        "kind": "array",
                                        "type": "TocLink[]",
                                        "schema": {
                                          "0": {
                                            "kind": "object",
                                            "type": "TocLink",
                                            "schema": {
                                              "id": {
                                                "name": "id",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "schema": "string"
                                              },
                                              "text": {
                                                "name": "text",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "schema": "string"
                                              },
                                              "depth": {
                                                "name": "depth",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "number",
                                                "schema": "number"
                                              },
                                              "children": {
                                                "name": "children",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": false,
                                                "type": "TocLink[]",
                                                "schema": "TocLink[]"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "body": {
                          "name": "body",
                          "global": false,
                          "description": "Content body",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownRoot",
                          "schema": "MarkdownRoot"
                        },
                        "layout": {
                          "name": "layout",
                          "global": false,
                          "description": "Layout",
                          "tags": [],
                          "required": false,
                          "type": "LayoutKey",
                          "schema": {
                            "kind": "array",
                            "type": "LayoutKey",
                            "schema": {}
                          }
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "Content id",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "schema": "string"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "Content source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "Content path, this path is source agnostic and it the content my live in any source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "Content title",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "Content draft status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": {
                              "0": "false",
                              "1": "true"
                            }
                          }
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "Content partial status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "schema": "boolean"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "Content locale",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "File type of the content, i.e `markdown`",
                          "tags": [],
                          "required": false,
                          "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                          "schema": {
                            "kind": "enum",
                            "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                            "schema": {
                              "0": "\"markdown\"",
                              "1": "\"yaml\"",
                              "2": "\"json\"",
                              "3": "\"csv\""
                            }
                          }
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "Path to the file relative to the content directory",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "Extension of the file",
                          "tags": [],
                          "required": false,
                          "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                          "schema": {
                            "kind": "enum",
                            "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                            "schema": {
                              "0": "\"yaml\"",
                              "1": "\"json\"",
                              "2": "\"csv\"",
                              "3": "\"md\"",
                              "4": "\"yml\"",
                              "5": "\"json5\""
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "schema": {
                  "kind": "event",
                  "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "query",
          "type": "QueryBuilderParams",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": {
                    "0": "false",
                    "1": "true"
                  }
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": {
                    "0": "string"
                  }
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": {
                    "0": {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": {
                                  "0": "\"upper\"",
                                  "1": "\"lower\"",
                                  "2": "\"false\""
                                }
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": {
                                  "0": "\"base\"",
                                  "1": "\"accent\"",
                                  "2": "\"case\"",
                                  "3": "\"variant\""
                                }
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {}
                              },
                              "5": "QueryBuilderWhere"
                            }
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": "RegExp"
                            }
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": {
                              "0": "string",
                              "1": "RegExp"
                            }
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or match every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "number",
                              "2": "false",
                              "3": "true",
                              "4": {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": {
                              "0": "string",
                              "1": "(string | number | boolean)[]"
                            }
                          }
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  }
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": {
                          "0": "string",
                          "1": "QueryBuilderWhere"
                        }
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ navigation: NavItem[]; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ navigation: NavItem[]; }",
            "schema": {
              "navigation": {
                "name": "navigation",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "NavItem[]",
                "schema": {
                  "kind": "array",
                  "type": "NavItem[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "NavItem",
                      "schema": {
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "schema": "string"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": {
                              "0": "false",
                              "1": "true"
                            }
                          }
                        },
                        "children": {
                          "name": "children",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "NavItem[]",
                          "schema": "NavItem[]"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "schema": {
                  "kind": "event",
                  "type": "({ navigation }: { navigation: NavItem[]; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "query",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "navigation",
          "type": "NavItem[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "NavItem[]",
            "schema": {
              "0": {
                "kind": "object",
                "type": "NavItem",
                "schema": {
                  "title": {
                    "name": "title",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "_path": {
                    "name": "_path",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "_id": {
                    "name": "_id",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string",
                    "schema": "string"
                  },
                  "_draft": {
                    "name": "_draft",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "boolean",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean",
                      "schema": {
                        "0": "false",
                        "1": "true"
                      }
                    }
                  },
                  "children": {
                    "name": "children",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "NavItem[]",
                    "schema": "NavItem[]"
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 0,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"div\""
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "tag",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        }
      ]
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "Content to render",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        },
        {
          "name": "components",
          "global": false,
          "description": "The map of custom components to use for rendering.",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "data",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "tag",
          "global": false,
          "description": "Root tag to use for rendering",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"div\""
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "Render only the excerpt",
          "tags": [],
          "required": false,
          "type": "boolean",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "components",
          "type": "Record<string, any>",
          "description": "The map of custom components to use for rendering.",
          "schema": "Record<string, any>"
        },
        {
          "name": "data",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "tag",
          "type": "string",
          "description": "Root tag to use for rendering",
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Render only the excerpt",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "Content to render",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "unwrap",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | boolean",
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": {
              "0": "string",
              "1": "false",
              "2": "true"
            }
          },
          "default": "false"
        },
        {
          "name": "use",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Function",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {}
          },
          "default": "void 0"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "unwrap",
          "type": "string | boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": {
              "0": "string",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "use",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {}
          }
        }
      ]
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "ParsedContent",
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot",
                "schema": {
                  "kind": "object",
                  "type": "MarkdownRoot",
                  "schema": {
                    "type": {
                      "name": "type",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "\"root\"",
                      "schema": "\"root\""
                    },
                    "children": {
                      "name": "children",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownNode[]",
                      "schema": {
                        "kind": "array",
                        "type": "MarkdownNode[]",
                        "schema": {
                          "0": {
                            "kind": "object",
                            "type": "MarkdownNode",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "string",
                                "schema": "string"
                              },
                              "tag": {
                                "name": "tag",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "schema": "string"
                              },
                              "value": {
                                "name": "value",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "schema": "string"
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "schema": "Record<string, any>"
                              },
                              "content": {
                                "name": "content",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "any",
                                "schema": "any"
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "MarkdownNode[]",
                                "schema": "MarkdownNode[]"
                              },
                              "attributes": {
                                "name": "attributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "schema": "Record<string, any>"
                              },
                              "fmAttributes": {
                                "name": "fmAttributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "schema": "Record<string, any>"
                              }
                            }
                          }
                        }
                      }
                    },
                    "props": {
                      "name": "props",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Record<string, any>",
                      "schema": "Record<string, any>"
                    },
                    "toc": {
                      "name": "toc",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Toc",
                      "schema": {
                        "kind": "object",
                        "type": "Toc",
                        "schema": {
                          "title": {
                            "name": "title",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "string",
                            "schema": "string"
                          },
                          "depth": {
                            "name": "depth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "schema": "number"
                          },
                          "searchDepth": {
                            "name": "searchDepth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "schema": "number"
                          },
                          "links": {
                            "name": "links",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "TocLink[]",
                            "schema": {
                              "kind": "array",
                              "type": "TocLink[]",
                              "schema": {
                                "0": {
                                  "kind": "object",
                                  "type": "TocLink",
                                  "schema": {
                                    "id": {
                                      "name": "id",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "text": {
                                      "name": "text",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "schema": "number"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "TocLink[]",
                                      "schema": "TocLink[]"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot",
                "schema": "MarkdownRoot"
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "LayoutKey",
                "schema": {
                  "kind": "array",
                  "type": "LayoutKey",
                  "schema": {}
                }
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": {
                    "0": "false",
                    "1": "true"
                  }
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": "boolean"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                  "schema": {
                    "0": "\"markdown\"",
                    "1": "\"yaml\"",
                    "2": "\"json\"",
                    "3": "\"csv\""
                  }
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                  "schema": {
                    "0": "\"yaml\"",
                    "1": "\"json\"",
                    "2": "\"csv\"",
                    "3": "\"md\"",
                    "4": "\"yml\"",
                    "5": "\"json5\""
                  }
                }
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "value",
          "type": "ParsedContent",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot",
                "schema": {
                  "kind": "object",
                  "type": "MarkdownRoot",
                  "schema": {
                    "type": {
                      "name": "type",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "\"root\"",
                      "schema": "\"root\""
                    },
                    "children": {
                      "name": "children",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownNode[]",
                      "schema": {
                        "kind": "array",
                        "type": "MarkdownNode[]",
                        "schema": {
                          "0": {
                            "kind": "object",
                            "type": "MarkdownNode",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "string",
                                "schema": "string"
                              },
                              "tag": {
                                "name": "tag",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "schema": "string"
                              },
                              "value": {
                                "name": "value",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "schema": "string"
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "schema": "Record<string, any>"
                              },
                              "content": {
                                "name": "content",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "any",
                                "schema": "any"
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "MarkdownNode[]",
                                "schema": "MarkdownNode[]"
                              },
                              "attributes": {
                                "name": "attributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "schema": "Record<string, any>"
                              },
                              "fmAttributes": {
                                "name": "fmAttributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "schema": "Record<string, any>"
                              }
                            }
                          }
                        }
                      }
                    },
                    "props": {
                      "name": "props",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Record<string, any>",
                      "schema": "Record<string, any>"
                    },
                    "toc": {
                      "name": "toc",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Toc",
                      "schema": {
                        "kind": "object",
                        "type": "Toc",
                        "schema": {
                          "title": {
                            "name": "title",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "string",
                            "schema": "string"
                          },
                          "depth": {
                            "name": "depth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "schema": "number"
                          },
                          "searchDepth": {
                            "name": "searchDepth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "schema": "number"
                          },
                          "links": {
                            "name": "links",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "TocLink[]",
                            "schema": {
                              "kind": "array",
                              "type": "TocLink[]",
                              "schema": {
                                "0": {
                                  "kind": "object",
                                  "type": "TocLink",
                                  "schema": {
                                    "id": {
                                      "name": "id",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "text": {
                                      "name": "text",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "schema": "number"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "TocLink[]",
                                      "schema": "TocLink[]"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot",
                "schema": "MarkdownRoot"
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "LayoutKey",
                "schema": {
                  "kind": "array",
                  "type": "LayoutKey",
                  "schema": {}
                }
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": {
                    "0": "false",
                    "1": "true"
                  }
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": "boolean"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                  "schema": {
                    "0": "\"markdown\"",
                    "1": "\"yaml\"",
                    "2": "\"json\"",
                    "3": "\"csv\""
                  }
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string",
                "schema": "string"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                  "schema": {
                    "0": "\"yaml\"",
                    "1": "\"json\"",
                    "2": "\"csv\"",
                    "3": "\"md\"",
                    "4": "\"yml\"",
                    "5": "\"json5\""
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "unwrap",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | boolean",
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": {
              "0": "string",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "use",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Function",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {}
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "unwrap",
          "type": "string | boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": {
              "0": "string",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "use",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {}
          }
        },
        {
          "name": "fallbackSlot",
          "type": "Slot<any>",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
            "schema": {
              "0": "any"
            }
          }
        },
        {
          "name": "tags",
          "type": "string[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          }
        },
        {
          "name": "between",
          "type": "Slot<any>",
          "description": "",
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
            "schema": {
              "0": "any"
            }
          }
        },
        {
          "name": "parent",
          "type": "ComponentInternalInstance",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "ComponentInternalInstance",
            "schema": {
              "_nuxtOnBeforeMountCbs": {
                "name": "_nuxtOnBeforeMountCbs",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(() => void | Promise<void>)[]",
                "schema": {
                  "kind": "array",
                  "type": "(() => void | Promise<void>)[]",
                  "schema": {
                    "0": {
                      "kind": "event",
                      "type": "(): void | Promise<void>"
                    }
                  }
                }
              },
              "_nuxtIdIndex": {
                "name": "_nuxtIdIndex",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "Record<string, number>",
                "schema": "Record<string, number>"
              },
              "_nuxtClientOnly": {
                "name": "_nuxtClientOnly",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": {
                    "0": "false",
                    "1": "true"
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProsePre": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "pascalName": "ProsePre",
    "kebabName": "prose-pre",
    "chunkName": "components/prose-pre",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[]",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": {
              "0": "number"
            }
          },
          "default": "[]"
        },
        {
          "name": "meta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "null"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (props: {}) => any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(props: {}) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props: {}): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "style",
          "type": "string | Record<string, any>",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | Record<string, any>",
            "schema": {
              "0": "string",
              "1": "Record<string, any>"
            }
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "language",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": {
              "0": "number"
            }
          }
        },
        {
          "name": "meta",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseScript": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "pascalName": "ProseScript",
    "kebabName": "prose-script",
    "chunkName": "components/prose-script",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  }
};

const _JWhII_ = eventHandler(async () => {
  const componentsIgnoredPrefix = ["Content", "DocumentDriven", "Markdown"];
  const filteredComponents = Object.values(components).filter((c) => c.global && !componentsIgnoredPrefix.some((prefix) => c.pascalName.startsWith(prefix))).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const { contentSchema, appConfigSchema, studio, content } = runtimeConfig;
  const { sources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental } = content;
  const safeSources = {};
  Object.keys(sources).forEach((name) => {
    const { driver, prefix, base, repo, branch, dir } = sources[name] || {};
    safeSources[name] = {
      driver,
      prefix,
      base,
      repo,
      branch,
      dir
    };
  });
  return {
    // Studio version
    version: studio?.version,
    tokens: studio?.publicToken,
    gitInfo: studio?.gitInfo || {},
    // nuxt.schema for Nuxt Content frontmatter
    contentSchema: contentSchema || {},
    // app.config
    appConfigSchema: appConfigSchema || {},
    appConfig,
    // @nuxt/content
    content: { sources: safeSources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental },
    // nuxt-component-meta
    components: filteredComponents
  };
});

const _50WS9l = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = (event.context.params["component?"] || "").replace(/\.json$/, "");
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

const _kCSAC2 = eventHandler(async (event) => {
  const { code, lang, theme: themeString, options: optionsStr } = getQuery$1(event);
  const theme = JSON.parse(themeString);
  const options = optionsStr ? JSON.parse(optionsStr) : {};
  const highlighter = await import('../build/mdc-highlighter.mjs').then((m) => m.default);
  return await highlighter(code, lang, theme, options);
});

const _SxA8c9 = defineEventHandler(() => {});

const _B_xdn4 = defineEventHandler(async (event) => {
  const { getContentQuery } = await import('../_/query.mjs');
  const { serverQueryContent } = await import('../_/storage.mjs').then(function (n) { return n.a; });
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent(event, query).count();
  }
  return serverQueryContent(event, query).find();
});

const __3y1RL = defineEventHandler(async (event) => {
  const { getContentIndex } = await import('../_/storage.mjs').then(function (n) { return n.c; });
  const { cacheStorage, serverQueryContent } = await import('../_/storage.mjs').then(function (n) { return n.a; });
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage().setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

const _Dmnj9H = defineEventHandler(async (event) => {
  const { getContentQuery } = await import('../_/query.mjs');
  const { cacheStorage, serverQueryContent } = await import('../_/storage.mjs').then(function (n) { return n.a; });
  const { createNav } = await import('../_/navigation.mjs');
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage().getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const _locale = (query?.where || []).find((w) => w._locale)?._locale;
  const dirConfigs = await serverQueryContent(event, _locale ? { where: [{ _locale }] } : void 0).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_ZMkhDB = () => import('../routes/api/search.mjs');
const _lazy_uK5k2h = () => import('../routes/opensearch.xml.mjs');
const _lazy_WLV_De = () => import('../_/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _imZ59f, lazy: false, middleware: true, method: undefined },
  { route: '/api/search', handler: _lazy_ZMkhDB, lazy: true, middleware: false, method: undefined },
  { route: '/opensearch.xml', handler: _lazy_uK5k2h, lazy: true, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _JWhII_, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _50WS9l, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta.json', handler: _50WS9l, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _50WS9l, lazy: false, middleware: false, method: "get" },
  { route: '/api/_mdc/highlight', handler: _kCSAC2, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _B_xdn4, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _B_xdn4, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _B_xdn4, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1771319986144.json', handler: __3y1RL, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _Dmnj9H, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _Dmnj9H, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _Dmnj9H, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_WLV_De, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, buildAssetsURL as b, useStorage as c, defineRenderHandler as d, useNitroApp as e, parseMarkdown as f, getRouteRules as g, getPreview as h, isPreview as i, baseURL as j, closePrerenderer as k, localFetch as l, publicAssetsURL as p, useAppConfig as u };
//# sourceMappingURL=nitro.mjs.map
