import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { NAVBAR_LINKS } from "@/constants";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25]">
      <div className="container px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {NAVBAR_LINKS.map(({ label, route }) => (
            <Button key={label} className="text-white" asChild variant="ghost">
              <Link href={route}>{label}</Link>
            </Button>
          ))}
        </div>
        <Link href="/">
          <Image className="-ml-10" src="/logo.svg" width={140} height={140} alt="logo" />
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Register</Button>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
}
