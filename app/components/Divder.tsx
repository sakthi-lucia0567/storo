type Props = {
  text: string;
};

const Divder = ({ text }: Props) => {
  return (
    <div className="text-center flex items-center mx-auto max-w-[70vw]">
      <div className="w-full h-[1px] bg-gradient-to-r from-[#413C3C] to-[#ffffff]"></div>
      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 w-full">
        {text}
      </p>
      <div className="w-full h-[1px] bg-gradient-to-l from-[#413C3C] to-[#ffffff]"></div>
    </div>
  );
};

export default Divder;
