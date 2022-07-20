import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "My Tree - MusicTree.me",
  };
};

export default function MyTree() {
  return <main>My Tree</main>;
}
