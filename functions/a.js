export async function onRequest(context) {
  return new Response(JSON.stringify({ val: "AAA"}), {
    headers: { "Content-Type": "application/json" }
  });
}
