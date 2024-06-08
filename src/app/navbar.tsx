import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className=" w-full">
      <nav className="flex justify-between items-center gap-3 w-full p-5  bg-sky-50 text-blue-500 ">
        <div className="flex  gap-3">
          <h1>Navbar</h1>
          <ul className="flex gap-3 font-normal cursor-pointer">
            <Link href="/">
              <li
                className={pathname === "/" ? "font-bold" : " text-slate-300"}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={
                  pathname === "/about" ? "font-bold" : " text-slate-300"
                }
              >
                About
              </li>
            </Link>
            <Link href="/about/profile">
              <li
                className={
                  pathname === "/about/profile"
                    ? "font-bold"
                    : " text-slate-300"
                }
              >
                profile
              </li>
            </Link>
            <Link href="/product">
              <li
                className={
                  pathname === "/product" ? "font-bold" : " text-slate-300"
                }
              >
                product
              </li>
            </Link>
          </ul>
        </div>
        <button
          onClick={() => router.push("/login")}
          className="p-2 font-semibold rounded-xl text-white bg-blue-500"
        >
          Login
        </button>
      </nav>
    </div>
  );
}
