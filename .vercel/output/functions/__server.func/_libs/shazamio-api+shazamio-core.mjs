import { n as __exportAll, r as __require, t as __commonJSMin } from "../_runtime.mjs";
import { randomUUID } from "crypto";
import { readFile } from "fs/promises";
//#region node_modules/shazamio-core/node/shazamio-core.js
var require_shazamio_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var imports = {};
	imports["__wbindgen_placeholder__"] = module.exports;
	var wasm;
	var { TextDecoder, TextEncoder } = __require("util");
	var cachedTextDecoder = new TextDecoder("utf-8", {
		ignoreBOM: true,
		fatal: true
	});
	cachedTextDecoder.decode();
	var cachedUint8Memory0 = null;
	function getUint8Memory0() {
		if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
		return cachedUint8Memory0;
	}
	function getStringFromWasm0(ptr, len) {
		ptr = ptr >>> 0;
		return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
	}
	var heap = new Array(128).fill(void 0);
	heap.push(void 0, null, true, false);
	var heap_next = heap.length;
	function addHeapObject(obj) {
		if (heap_next === heap.length) heap.push(heap.length + 1);
		const idx = heap_next;
		heap_next = heap[idx];
		heap[idx] = obj;
		return idx;
	}
	function getObject(idx) {
		return heap[idx];
	}
	function dropObject(idx) {
		if (idx < 132) return;
		heap[idx] = heap_next;
		heap_next = idx;
	}
	function takeObject(idx) {
		const ret = getObject(idx);
		dropObject(idx);
		return ret;
	}
	var cachedFloat32Memory0 = null;
	function getFloat32Memory0() {
		if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
		return cachedFloat32Memory0;
	}
	var WASM_VECTOR_LEN = 0;
	function passArrayF32ToWasm0(arg, malloc) {
		const ptr = malloc(arg.length * 4, 4) >>> 0;
		getFloat32Memory0().set(arg, ptr / 4);
		WASM_VECTOR_LEN = arg.length;
		return ptr;
	}
	var cachedInt32Memory0 = null;
	function getInt32Memory0() {
		if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
		return cachedInt32Memory0;
	}
	function passArray8ToWasm0(arg, malloc) {
		const ptr = malloc(arg.length * 1, 1) >>> 0;
		getUint8Memory0().set(arg, ptr / 1);
		WASM_VECTOR_LEN = arg.length;
		return ptr;
	}
	function isLikeNone(x) {
		return x === void 0 || x === null;
	}
	var cachedUint32Memory0 = null;
	function getUint32Memory0() {
		if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
		return cachedUint32Memory0;
	}
	function getArrayJsValueFromWasm0(ptr, len) {
		ptr = ptr >>> 0;
		const slice = getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
		const result = [];
		for (let i = 0; i < slice.length; i++) result.push(takeObject(slice[i]));
		return result;
	}
	/**
	* Recognizes an audio fingerprint fron song bytes and returns decoded signatures.
	* # Arguments
	* * `bytes` - Bytes of the song file
	* * `offset` - When to start sampling from in seconds
	* * `seconds` - Seconds to sample from offset
	* @param {Uint8Array} bytes
	* @param {number | undefined} [offset]
	* @param {number | undefined} [seconds]
	* @returns {(DecodedSignature)[]}
	*/
	module.exports.recognizeBytes = function(bytes, offset, seconds) {
		try {
			const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
			const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
			const len0 = WASM_VECTOR_LEN;
			wasm.recognizeBytes(retptr, ptr0, len0, !isLikeNone(offset), isLikeNone(offset) ? 0 : offset, !isLikeNone(seconds), isLikeNone(seconds) ? 0 : seconds);
			var r0 = getInt32Memory0()[retptr / 4 + 0];
			var r1 = getInt32Memory0()[retptr / 4 + 1];
			var r2 = getInt32Memory0()[retptr / 4 + 2];
			if (getInt32Memory0()[retptr / 4 + 3]) throw takeObject(r2);
			var v2 = getArrayJsValueFromWasm0(r0, r1).slice();
			wasm.__wbindgen_free(r0, r1 * 4, 4);
			return v2;
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16);
		}
	};
	/**
	*/
	module.exports.start = function() {
		wasm.start();
	};
	var cachedTextEncoder = new TextEncoder("utf-8");
	var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
		return cachedTextEncoder.encodeInto(arg, view);
	} : function(arg, view) {
		const buf = cachedTextEncoder.encode(arg);
		view.set(buf);
		return {
			read: arg.length,
			written: buf.length
		};
	};
	function passStringToWasm0(arg, malloc, realloc) {
		if (realloc === void 0) {
			const buf = cachedTextEncoder.encode(arg);
			const ptr = malloc(buf.length, 1) >>> 0;
			getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
			WASM_VECTOR_LEN = buf.length;
			return ptr;
		}
		let len = arg.length;
		let ptr = malloc(len, 1) >>> 0;
		const mem = getUint8Memory0();
		let offset = 0;
		for (; offset < len; offset++) {
			const code = arg.charCodeAt(offset);
			if (code > 127) break;
			mem[ptr + offset] = code;
		}
		if (offset !== len) {
			if (offset !== 0) arg = arg.slice(offset);
			ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
			const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
			const ret = encodeString(arg, view);
			offset += ret.written;
			ptr = realloc(ptr, len, offset, 1) >>> 0;
		}
		WASM_VECTOR_LEN = offset;
		return ptr;
	}
	var DecodedSignatureFinalization = typeof FinalizationRegistry === "undefined" ? {
		register: () => {},
		unregister: () => {}
	} : new FinalizationRegistry((ptr) => wasm.__wbg_decodedsignature_free(ptr >>> 0));
	/**
	*/
	var DecodedSignature = class DecodedSignature {
		static __wrap(ptr) {
			ptr = ptr >>> 0;
			const obj = Object.create(DecodedSignature.prototype);
			obj.__wbg_ptr = ptr;
			DecodedSignatureFinalization.register(obj, obj.__wbg_ptr, obj);
			return obj;
		}
		__destroy_into_raw() {
			const ptr = this.__wbg_ptr;
			this.__wbg_ptr = 0;
			DecodedSignatureFinalization.unregister(this);
			return ptr;
		}
		free() {
			const ptr = this.__destroy_into_raw();
			wasm.__wbg_decodedsignature_free(ptr);
		}
		/**
		* @param {Float32Array} f32_buffer
		* @param {number} orig_sample_rate_hz
		* @param {number} orig_channel_count
		* @returns {DecodedSignature}
		*/
		static new(f32_buffer, orig_sample_rate_hz, orig_channel_count) {
			const ptr0 = passArrayF32ToWasm0(f32_buffer, wasm.__wbindgen_malloc);
			const len0 = WASM_VECTOR_LEN;
			const ret = wasm.decodedsignature_new(ptr0, len0, orig_sample_rate_hz, orig_channel_count);
			return DecodedSignature.__wrap(ret);
		}
		/**
		* @returns {string}
		*/
		get uri() {
			let deferred1_0;
			let deferred1_1;
			try {
				const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
				wasm.decodedsignature_uri(retptr, this.__wbg_ptr);
				var r0 = getInt32Memory0()[retptr / 4 + 0];
				var r1 = getInt32Memory0()[retptr / 4 + 1];
				deferred1_0 = r0;
				deferred1_1 = r1;
				return getStringFromWasm0(r0, r1);
			} finally {
				wasm.__wbindgen_add_to_stack_pointer(16);
				wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
			}
		}
		/**
		* @returns {number}
		*/
		get samplems() {
			return wasm.decodedsignature_samplems(this.__wbg_ptr) >>> 0;
		}
		/**
		* @returns {number}
		*/
		get number_samples() {
			return wasm.decodedsignature_number_samples(this.__wbg_ptr) >>> 0;
		}
	};
	module.exports.DecodedSignature = DecodedSignature;
	module.exports.__wbg_decodedsignature_new = function(arg0) {
		return addHeapObject(DecodedSignature.__wrap(arg0));
	};
	module.exports.__wbindgen_string_new = function(arg0, arg1) {
		return addHeapObject(getStringFromWasm0(arg0, arg1));
	};
	module.exports.__wbg_new_abda76e883ba8a5f = function() {
		return addHeapObject(/* @__PURE__ */ new Error());
	};
	module.exports.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
		const ret = getObject(arg1).stack;
		const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
		const len1 = WASM_VECTOR_LEN;
		getInt32Memory0()[arg0 / 4 + 1] = len1;
		getInt32Memory0()[arg0 / 4 + 0] = ptr1;
	};
	module.exports.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
		let deferred0_0;
		let deferred0_1;
		try {
			deferred0_0 = arg0;
			deferred0_1 = arg1;
			console.error(getStringFromWasm0(arg0, arg1));
		} finally {
			wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
		}
	};
	module.exports.__wbindgen_object_drop_ref = function(arg0) {
		takeObject(arg0);
	};
	module.exports.__wbindgen_throw = function(arg0, arg1) {
		throw new Error(getStringFromWasm0(arg0, arg1));
	};
	var path = __require("path").join(__require("path").dirname(__require("url").fileURLToPath(import.meta.url)), "shazamio-core_bg.wasm");
	var bytes = __require("fs").readFileSync(path);
	var wasmModule = new WebAssembly.Module(bytes);
	wasm = new WebAssembly.Instance(wasmModule, imports).exports;
	module.exports.__wasm = wasm;
	wasm.__wbindgen_start();
}));
//#endregion
//#region node_modules/shazamio-api/dist/index.mjs
var dist_exports = /* @__PURE__ */ __exportAll({
	NoMatchesFoundError: () => NoMatchesFoundError,
	Shazam: () => Shazam,
	ShazamError: () => ShazamError,
	ShazamNetworkError: () => ShazamNetworkError,
	default: () => index_default
});
var import_shazamio_core = require_shazamio_core();
var ShazamError = class extends Error {
	status;
	constructor(message, status = null) {
		super(message);
		this.name = "ShazamError";
		this.status = status;
	}
};
var NoMatchesFoundError = class extends ShazamError {
	constructor() {
		super("No song matched the given audio sample");
		this.name = "NoMatchesFoundError";
	}
};
var ShazamNetworkError = class extends ShazamError {
	constructor(message, status = null) {
		super(message, status);
		this.name = "ShazamNetworkError";
	}
};
var ShazamUrl = { SEARCH_FROM_FILE: (language, endpointCountry, device, uuid1, uuid2) => `https://amp.shazam.com/discovery/v5/${language}/${endpointCountry}/${device}/-/tag/${uuid1}/${uuid2}?sync=true&webv3=true&sampling=true&connected=&shazamapiversion=v3&sharehub=true&hubv5minorversion=v5.1&hidelb=true&video=v3` };
var USER_AGENTS = [
	"Dalvik/2.1.0 (Linux; U; Android 5.0.2; VS980 4G Build/LRX22G)",
	"Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-T210 Build/KOT49H)",
	"Dalvik/2.1.0 (Linux; U; Android 5.1.1; SM-P905V Build/LMY47X)",
	"Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-G920F Build/MMB29K)",
	"Dalvik/2.1.0 (Linux; U; Android 5.1.1; SM-J500FN Build/LMY48B)",
	"Dalvik/2.1.0 (Linux; U; Android 6.0.1; D6603 Build/23.5.A.0.570)",
	"Dalvik/2.1.0 (Linux; U; Android 5.1.1; SM-N910G Build/LMY47X)",
	"Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
];
var DEVICES = [
	"iphone",
	"android",
	"web"
];
function randomUserAgent() {
	return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}
function randomDevice() {
	return DEVICES[Math.floor(Math.random() * DEVICES.length)];
}
function shazamHeaders(language) {
	return {
		"X-Shazam-Platform": "IPHONE",
		"X-Shazam-AppVersion": "14.1.0",
		Accept: "*/*",
		"Accept-Language": language,
		"Accept-Encoding": "gzip, deflate",
		"User-Agent": randomUserAgent()
	};
}
function newUuid() {
	return randomUUID().toUpperCase();
}
var Shazam = class {
	language;
	endpointCountry;
	timezone;
	constructor(options = {}) {
		this.language = options.language ?? "en-US";
		this.endpointCountry = options.endpointCountry ?? "GB";
		this.timezone = options.timezone ?? "Europe/Moscow";
	}
	/**
	* Recognizes a song from an audio file. Accepts any container/codec
	* `shazamio-core` can decode (mp3, flac, wav, ogg, m4a, ...).
	*
	*   @param data Path to an audio file, or its raw bytes.
	*   @param options.offset Seconds into the audio to start sampling from.
	*   @param options.seconds Seconds of audio to sample.
	*   @returns The raw Shazam recognition response.
	*   @throws {NoMatchesFoundError} if no song matched the sample.
	*/
	async recognize(data, options = {}) {
		const bytes = typeof data === "string" ? await readFile(data) : data;
		const decoded = (0, import_shazamio_core.recognizeBytes)(new Uint8Array(bytes), options.offset, options.seconds);
		try {
			if (decoded.length === 0) throw new NoMatchesFoundError();
			const signature = {
				uri: decoded[0].uri,
				samplems: decoded[0].samplems,
				numberSamples: decoded[0].number_samples
			};
			return await this.sendRecognizeRequest(signature, options.signal);
		} finally {
			for (const sig of decoded) sig.free();
		}
	}
	async sendRecognizeRequest(signature, signal) {
		const url = ShazamUrl.SEARCH_FROM_FILE(this.language, this.endpointCountry, randomDevice(), newUuid(), newUuid());
		const body = {
			timezone: this.timezone,
			signature: {
				uri: signature.uri,
				samplems: signature.samplems
			},
			timestamp: Date.now(),
			context: {},
			geolocation: {}
		};
		let response;
		try {
			response = await fetch(url, {
				method: "POST",
				headers: {
					...shazamHeaders(this.language),
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body),
				signal
			});
		} catch (err) {
			throw new ShazamNetworkError(`Failed to reach Shazam: ${err.message}`);
		}
		if (!response.ok) throw new ShazamNetworkError(`Shazam responded with HTTP ${response.status}`, response.status);
		let result;
		try {
			result = await response.json();
		} catch (err) {
			throw new ShazamNetworkError(`Failed to parse Shazam's JSON response: ${err.message}`);
		}
		if (!result.matches || result.matches.length === 0) throw new NoMatchesFoundError();
		return result;
	}
};
var index_default = new Shazam();
//#endregion
export { dist_exports as t };
