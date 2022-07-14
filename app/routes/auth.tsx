import { createCookieSessionStorage, LoaderFunction } from "@remix-run/node";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const TOKEN_KEY = "access_token=";

export default function auth(){
  let location = useLocation(); 
  useEffect(()=> {
	console.log("in use effect")
	const params = new URLSearchParams(location.hash.substring(1));
	const accessToken = params.get("access_token");
  }, [])
}

// export const loader: LoaderFunction = async ({ request }) => {
// 	debugger;
//   const url = new URL(request.url)
//   console.log('params: ' + url.searchParams)
//   const param = url.searchParams.get('access_token')
//   debugger
//   //if magic link -> createSession
//   return null;
// };
// let sessionSecret = process.env.SESSION_SECRET;
// if (!sessionSecret) {
//   throw new Error("SESSION_SECRET must be set");
// }

// let storage = createCookieSessionStorage({
//   cookie: {
//     name: "APP_SESSION",
//     secure: true,
//     secrets: [sessionSecret],
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 30,
//     httpOnly: true,
//   },
// });

// export async function createUserSessionWithToken(accessToken: string) {
//   // Get/create a cookie from the cookie store
//   let session = await storage.getSession();

//   //Set the accessToken property in the cookie
//   session.set("accessToken", accessToken);

//   // Return the response that sets the cookie in the client
//   return json(null, {
//     headers: {
//       "Set-Cookie": await storage.commitSession(session),
//     },
//   });
// }
