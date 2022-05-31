import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Explore Trees - MusicTree.me",
  };
};
export default function Explore() {
  return <main>Explore</main>;
}
