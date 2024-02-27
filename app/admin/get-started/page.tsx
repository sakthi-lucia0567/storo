import Divder from "@/app/components/Divder";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="block font-semibold text-gray-800 text-[40px] md:text-[48px] lg:text-[58px] dark:text-gray-200 leading-[4rem]">
                <span className="inline-block bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  Revolutionize
                </span>{" "}
                your digital
                <br />
                Sass Products
              </h1>
              <div className="mt-5">
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
                  Get your backend done in minutes instead of weeks. Easily
                  build customizable content API and use them with a modern tech
                  stack. Elevate your sass applications now!
                </p>
              </div>

              <div className="mt-8 gap-3 flex justify-center">
                <Link
                  className="py-3 px-7 inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-primary text-white hover:bg-[#6c63ff]/80 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/login"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Divder text="How it works" />
    </div>
  );
};

export default page;
