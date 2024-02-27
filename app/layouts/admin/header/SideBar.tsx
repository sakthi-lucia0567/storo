import Link from "next/link";
import Image from "next/image";
import { Bar3, CloseIcon } from "@/app/components/Icons";

interface Props {
  menus: {
    name: string;
    href: string;
  }[];
}
const SideBar = ({ menus }: Props) => {
  const MenuItem = ({ item }: { item: { name: string; href: string } }) => {
    return (
      <li>
        <Link
          href={item.href}
          prefetch={false}
          key={item.name}
          data-hs-overlay="#hs-overlay-unstyled"
          aria-controls="hs-overlay-unstyled"
          aria-label="Toggle navigation"
          className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-[500] text-grey hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
          {" "}
          {item.name}{" "}
        </Link>
      </li>
    );
  };

  return (
    <div className="sm:hidden contents">
      <button
        type="button"
        data-hs-overlay="#hs-overlay-unstyled"
        aria-controls="hs-overlay-unstyled"
        aria-label="Toggle navigation"
      >
        <Bar3 />
      </button>

      <div
        id="hs-overlay-unstyled"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[60] hidden w-[100%]"
      >
        <div className="bg flex h-[100%] w-[370px] -translate-x-full transform flex-col gap-4 overflow-y-auto bg-white px-2 pb-5 pt-3 transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-zinc-900 mobile:w-[75%] lg:bottom-0 lg:right-auto lg:block lg:translate-x-0">
          <div className="flex justify-between">
            <button
              type="button"
              className="h-8 w-8"
              data-hs-overlay="#hs-overlay-unstyled"
              aria-controls="hs-overlay-unstyled"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Close Sidebar</span>
              <CloseIcon size={20} strokeWidth={1.5} className="text-gray" />
            </button>
          </div>

          <nav className="">
            <ul>
              {menus.map((item) => (
                <MenuItem item={item} key={item.name} />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-10 text-sm">
            <Link href="/login" className="bg-primary rounded-[2px]">
              <button className="py-2 px-4 text-primary-foreground">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
