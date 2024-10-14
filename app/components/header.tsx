import Link from "next/link";
import { LoginButton } from "./login-button";

export function Header() {
  return (
    <header className="h-20 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <img src="/template-icon.webp" alt="logo-template" className="w-8" />
        <div className="flex items-center gap-1">
          <span className="font-bold text-xl">Template SaaS</span>
          <span className="text-sm">by André Dev</span>
        </div>
      </Link>
      <LoginButton />
    </header>
  );
}
