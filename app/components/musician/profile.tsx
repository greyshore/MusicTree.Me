// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { useEffect, useState } from "react";
// import { getUser } from "~/models/user.server";

// export async function loader() {
//   return json(await getUser());
// }
// export default function Profile() {
//   const profile = useLoaderData();
//   useEffect(() => {
//     // todo loader fn, setProfile
//     getUser();
//   }, []);
//   if (!profile) return null;
//   return <div>{profile}</div>;
// }
