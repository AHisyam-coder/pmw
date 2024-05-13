import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { BadgeX } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Utama", href: "/" },
  { name: "Produk", href: "/menu" },
  { name: "Hubungi", href: "/contact" },
];

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-green-100 shadow-md" : ""
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo-pakmatwestern.png"
              alt=""
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <BadgeX className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 grid">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col items-center"
            >
              <Link
                href={item.href}
                className={`text-sm font-semibold leading-6 p-4 ${
                  scrolled ? "text-gray-900" : "text-white"
                } `}
              >
                {item.name}
              </Link>
              <div>
                {router.pathname === item.href ? (
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 ${
                      scrolled ? "bg-green-900" : "bg-white opacity-100"
                    }`}
                  ></div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </header>
  );
};

export default Header;
