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

  return <main>Landing Page!</main>;
}
