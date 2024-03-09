type Props = {
  text: string;
  id: string;
};

const Divder = ({ text, id }: Props) => {
  return (
    <div className="text-center flex items-center mx-auto max-w-[70vw]" id={id}>
      <div className="w-full h-[1px] bg-gradient-to-r from-[#413C3C] to-[#ffffff]"></div>
      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 w-full">
        {text}
      </p>
      <div className="w-full h-[1px] bg-gradient-to-l from-[#413C3C] to-[#ffffff]"></div>
    </div>
  );
};

export default Divder;
