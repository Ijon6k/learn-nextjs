import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="h-screen px-10 fixed top-14 right-0 bg-slate-300 text-white w-60 ">
        <h1>Side bar</h1>
        <h1 className=" font-bold text-black mb-5 text-   xl">
          berada di page /about
        </h1>
        <ul className="flex flex-col gap-2 ">
          <Link href="/">
            <li>Home </li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/about/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
