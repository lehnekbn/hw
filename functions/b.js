export async function onRequest(context) {
  return new Response(JSON.stringify({ val: "BBB"}), {
    headers: { "Content-Type": "application/json" }
  });
}
