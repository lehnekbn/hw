// This function runs on the server whenever someone visits /time
export async function onRequest(context) {
  const currentTime = new Date().toLocaleTimeString();
  
  return new Response(
    "XXX"+JSON.stringify({ time: currentTime }),
    (headers: { "Content-Type": "application/json" }
  );
}

