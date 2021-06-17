import { removeAuthToken } from "@/services/authService";
import { useUser } from "@/swr/user";
import Link from "next/link";
import { useRouter } from "next/router";
import { cache } from "swr";

export default function Home() {
  const router = useRouter();
  const { data: user, mutate } = useUser();

  const handleLogout = () => {
    removeAuthToken();
    cache.clear();
    router.replace("/login");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-2">
        <h1 className="text-3xl mb-2 font-semibold">
          Next GraphQL Client Starter Project
        </h1>

        <p className="text-sm my-3">
          {user ? (
            <>
              <button onClick={handleLogout}>Logout</button>
              <Link href="/user">
                <a>User</a>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </p>

        <p className="text-sm">
          Built-in Authentication, GraphQL, SWR, Tailwind CSS, and http
          services.
        </p>

        <p className="text-sm">
          It can be used to create stand-alone web apps without any external
          backend service. Built-in Node serverless functions support.
        </p>

        <p className="text-sm">Thank me later @Desse</p>
      </div>
    </>
  );
}
