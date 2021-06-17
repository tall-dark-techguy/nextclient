import cookie from "@/utils/cookieHandler";
import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "@/services/authService";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email: email.value, password: password.value };

    login(data).then((res) => {
      cookie.set(process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME, res.data.data);
      globalThis.alert("Logged in!");
      router.replace("/user");
    });
  };

  return (
    <>
      <h1>Welcome back, Chief!</h1>
      <p>Please login.</p>

      <div className="m-2">
        <form onSubmit={handleSubmit}>
          <input
            value={email.value || ""}
            onChange={(e) => setEmail({ value: e.target.value })}
            type="email"
            className="border p-1"
            placeholder="Email"
          />
          <input
            value={password.value || ""}
            onChange={(e) => setPassword({ value: e.target.value })}
            type="password"
            className="border p-1"
            placeholder="Password"
          />

          <button className="py-1 px-7 bg-blue-500 text-white hover:bg-blue-600 text-center">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
