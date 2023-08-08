import { defineMiddleware, sequence } from "astro/middleware";
// import htmlminifier from "html-minifier-terser";

const limit = 50;

//Build time error with this library
// export const minifier = defineMiddleware(async (context, next) => {
//   const response = await next();
//   // check if the response is returning some HTML
//   if (response.headers.get("content-type") === "text/html") {
//     let headers = response.headers;
//     let html = await response.text();
//     let newHtml = await htmlminifier.minify(html, {
//       removeAttributeQuotes: true,
//       collapseWhitespace: true,
//     });
//     return new Response(newHtml, {
//       status: 200,
//       headers,
//     });
//   }
//   return response;
// });

const validation = defineMiddleware(async (context, next) => {
  if (context.request.url.endsWith("/admin")) {
    
    if (context.cookies.get("authToken").value === "loggedIn") {
      console.log(context.cookies.get("authToken").value);
      context.locals.user = {
        name: "Phu",
        surname: "Thien",
      };
      return await next();
    } else {
      return context.redirect("/login");
    }
  }
  return next();
});

export const onRequest = sequence(validation);
