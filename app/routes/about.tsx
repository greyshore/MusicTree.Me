import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "About - MusicTree.me",
  };
};
export default function About() {
  return <main>About</main>;
}
