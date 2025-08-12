"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HeaderIcon } from "./header-icon";
import { HeaderSearch } from "./header-search";

type MenuItem = {
  label: string;
  href: string;
};

export function Header() {
  const menu: MenuItem[] = [
    {
      label: "Camisetas",
      href: "/categories/camiseta",
    },
    {
      label: "Kits B7Web",
      href: "/categories/kits",
    },
  ];

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white text-center p-4 flex justify-center">
        <p>
          <strong>FRETE GRÁTIS</strong> para todo o Brasil
        </p>
        <p className="hidden lg:block">
          nas compras acima de R$ 199,00. <strong>APROVEITA!</strong>
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <Link href={"/"}>
              <Image
                src="/assets/ui/logo-black.png"
                alt="B7Store"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href={"/my-orders"}>
              <HeaderIcon src="/assets/ui/user-line.png" alt="Perfil" />
            </Link>
            <Link href={"/cart"}>
              <HeaderIcon
                src="/assets/ui/shopping-bag-4-line.png"
                alt="Carrinho"
              />
            </Link>
            <div
              className="md:hidden"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <HeaderIcon
                src="/assets/ui/menu-line.png"
                alt="Menu"
                selected={menuOpened}
                srcSelected="/assets/ui/menu-line-white.png"
              />
            </div>
          </div>
        </div>
      </div>
      {menuOpened && (
        <div className="md:hidden">
          {menu.map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="font-medium text-lg text-gray-500">
                  {item.label}
                </div>
                <div>
                  <Image
                    src={"/assets/ui/arrow-up-right.png"}
                    alt="Ir a categoria"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="p-6 md:hidden">
        <HeaderSearch />
      </div>
    </header>
  );
}
