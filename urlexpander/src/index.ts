/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const searchURL = new URL(request.url);
    const urlParams = new URLSearchParams(searchURL.search);
    const search = urlParams.get("search");
    if (!search) {
      return new Response(JSON.stringify({ message: "OK", url: null }), {
        headers: { "content-type": "application/json" },
      });
    }
    const res = await fetch(search);
    const { url } = res;
    return new Response(JSON.stringify({ message: "OK", url }), {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "https://expand.flashblaze.xyz",
      },
    });
  },
};
