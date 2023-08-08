import { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  let data;
  if (request.headers.get("content-type") === 'application/json') {
    data = await request.json();
    const username = data?.username;
    const password = data?.password;
    // Validate the data - you'll probably want to do more than this
    if (!username || !password) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }
  }
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!",
      token: "loggedIn",
      status: true
    }),
    { status: 200 }
  );
};
