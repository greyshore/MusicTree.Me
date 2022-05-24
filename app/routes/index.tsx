import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main>
      Landing Page
      {!user ? (
        <Link to="/notes">View Notes for foo</Link>
      ) : (
        <div>
          <Link
            to="/join"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="flex items-center justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600  "
          >
            Log In
          </Link>
        </div>
      )}
    </main>
  );
}
