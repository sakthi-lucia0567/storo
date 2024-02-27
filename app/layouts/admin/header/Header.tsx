import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.png";
import dynamic from "next/dynamic";
import SideBar from "./SideBar";

const DarkModeToggler = dynamic(
  () => import("@/app/components/DarkModeToggler"),
  {
    ssr: false,
    loading: () => (
      <div className="w-[20px] h-[20px] animate-pulse bg-accent"></div>
    ),
  }
);
const Header = () => {
  const navItems = [
    {
      name: "How it works",
      href: "/how-it-works",
    },
    {
      name: "Prices",
      href: "/prices",
    },
    {
      name: "Testimonials",
      href: "/testimonials",
    },
    {
      name: "FAQ's",
      href: "/faq",
    },
  ];
  return (
    <header>
      <div className="p-6">
        <div className="bg-transparent justify-between items-center hidden sm:flex">
          <div className="flex items-center gap-10 text-sm">
            <Image src={Logo} alt="logo" width={50} height={50} />
          </div>
          <div className="flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
            <DarkModeToggler />
            <div className="flex items-center gap-10 text-sm">
              <Link href="/login" className="bg-primary rounded-[2px]">
                <button className="py-2 px-6 text-primary-foreground">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex justify-between">
          <SideBar menus={navItems} />
          {/* <Image src={Logo} alt="logo" width={50} height={50} /> */}
          <DarkModeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
