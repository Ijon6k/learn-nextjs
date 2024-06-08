import Link from "next/link";

export default function RegisterPage() {
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-slate-300 rounded-lg outline-none p-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-slate-300 rounded-lg outline-none p-1"
        />
        <button type="submit">Register</button>
      </form>
      <div>
        already have an account?{" "}
        <Link href="/login" className="text-blue-500 font-semibold">
          Login
        </Link>
      </div>
    </section>
  );
}
