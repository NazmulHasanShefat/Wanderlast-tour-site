import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="nav_container py-3 flex items-center justify-between w-full max-w-7xl mx-auto px-5">
        <div>
          <Link href={"/"}>
          <h1 className="font-bold text-3xl text-sky-400">Wanderlast</h1>
          </Link>
        </div>
        <ul className="flex items-center gap-2">
          <li> <Link href={"/destinations"} className="hover:text-sky-400 transition-all duration-200 text-lg px-3 py-2">Destinations</Link> </li>
          <li> <Link href={"/login"} className="hover:text-sky-400 transition-all duration-200 text-lg px-3 py-2">Login</Link> </li>
          <li> <Link href={"/register"} className="hover:text-sky-400 transition-all duration-200 text-lg px-3 py-2">Register</Link> </li>
        </ul>
      </div>
    </nav>
  );
}