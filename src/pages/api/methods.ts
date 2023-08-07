import type { APIRoute } from "astro";
import { mapUrl } from "../../api";
import axios from "axios";

export const prerender = true;

export const get:APIRoute = async ({params, request}) => {
  const products = await axios(mapUrl("blogs"));

  if (!products) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }
  
  return new Response(JSON.stringify(products.data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//Implement later
// export const post:APIRoute = async ({params, request}) => {
  
// }