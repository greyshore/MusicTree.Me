import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/explore");
    }
  }, [user, navigate]);

  return (
    <main>
      <div>
        <Link to="/join">Sign up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </main>
  );
}
