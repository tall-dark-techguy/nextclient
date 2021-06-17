import { useUser } from "@/swr/user";
import ProtectedPage from "./authHOC";

function User() {
  return (
    <>
      <h1>This is a protected page.</h1>

      <p>This page renders client-side only.</p>

      <p>
        There's no server-side rendering for all pages wrapped with the
        ProtectedPage HOC.
      </p>
    </>
  );
}

export default ProtectedPage(User);
