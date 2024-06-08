import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex min-h-screen items-center justify-center w-full flex-col">
      <form action="" className="flex flex-col gap-3 p-5 rounded-md bg-sky-200">
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
