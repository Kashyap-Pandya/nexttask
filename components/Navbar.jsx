import Link from "next/link";

const Links = [
  { href: "/bar", text: "bar" },
  { href: "/todo", text: "todo" },
  { href: "/prisma", text: "prisma" },
];

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-2xl ">
      <div className="navbar max-w-6xl mx-auto flex-wrap sm:flex-row gap-4 justify-center items-center ">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <ul className="gap-4 flex-wrap justify-center  sm:flex-row items-center ">
          {Links.map((l) => (
            <li className="btn btn-primary capitalize " key={l.href}>
              <Link href={l.href}>{l.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
