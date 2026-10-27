const MODEL_URL =
  "https://huggingface.co/StemSplitio/htdemucs-onnx/resolve/main/htdemucs_fp16weights.onnx";

export async function demucsModelResponse() {
  const upstream = await fetch(MODEL_URL, { redirect: "follow" });
  if (!upstream.ok || !upstream.body) {
    return new Response("Modello Demucs non disponibile", { status: 502 });
  }
  const headers = new Headers();
  headers.set("content-type", "application/octet-stream");
  headers.set("cache-control", "public, max-age=86400");
  const length = upstream.headers.get("content-length");
  if (length) headers.set("content-length", length);
  return new Response(upstream.body, { status: 200, headers });
}
