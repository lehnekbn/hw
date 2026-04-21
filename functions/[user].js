export async function onRequest(context) {
  return new Response(
		JSON.stringify({ val: context.params.user }))
}
