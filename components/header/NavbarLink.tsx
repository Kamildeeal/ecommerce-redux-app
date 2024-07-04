import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface NavbarLinkProps extends PropsWithChildren {
  href: string;
}

export default function NavbarLink({ children, href }: NavbarLinkProps) {
  return (
    <div>
      <Link href={href} className="hover:text-gray-300 lg:text-2xl">
        {children}
      </Link>
    </div>
  );
}
