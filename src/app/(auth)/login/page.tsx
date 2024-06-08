"use client";
import Link from "next/link";

export default function LoginPage() {
  const handleLgoin = (e: any) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    });
  };

  return (
    <section className="flex min-h-screen items-center justify-center w-full flex-col">
      <form
        action=""
        className="flex flex-col gap-3 p-5 rounded-md bg-sky-200"
        onSubmit={(e) => handleLgoin(e)}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-slate-300 rounded-lg outline-none p-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-slate-300 rounded-lg outline-none p-1 "
        />
        <button type="submit">Login</button>
      </form>
      <div>
        dont have an account?{" "}
        <Link href="/register" className="text-blue-500 font-semibold">
          Register
        </Link>
      </div>
    </section>
  );
}
