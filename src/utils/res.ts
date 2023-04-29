export function Res(body: {}, init?: {}) {
  init = init || {
    headers: {
      "content-type": "text/plain;charset=UTF-8",
      status: 200,
    },
  };

  return new Response(JSON.stringify(body, null, 4), init);
}
