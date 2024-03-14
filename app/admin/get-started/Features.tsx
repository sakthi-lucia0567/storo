import Image from "next/image";
import Speed_opt from "../../../assets/images/speed_opt.svg";
import Cloud from "../../../assets/images/cloud.svg";
import Support from "../../../assets/images/support.svg";
import Advanced_ui from "../../../assets/images/advanced_ui.svg";
import Open_source from "../../../assets/images/analytics.svg";
const Features = () => {
  const features = [
    {
      name: "Speed Optimization",
      description:
        "Get your backend done in minutes instead of weeks. Easily build customizable content API and use them with a modern tech stack. Elevate your sass applications now!",
      imageSrc: Speed_opt,
    },
    {
      name: "Self-hosted or Cloud",
      description:
        "Extend the capabilities of AniMart with self-hosted or cloud based hosting.You’re in control, no lock-in.",
      imageSrc: Cloud,
    },
    {
      name: "Support",
      description:
        "We provide a full manual with text and video tutorials about how to use AniMart. We are here to help you with any questions you may have.",
      imageSrc: Support,
    },
    {
      name: "Open Source",
      description:
        "AniMart is a platform for selling anime merchandise, with a focus on quality and also we provide open source headless ecommerce solution for anime fans.",
      imageSrc: Open_source,
    },
    {
      name: "Advanced Analytics",
      description:
        "We are also providing advanced analytics for our users. We provide a full manual with text and video tutorials about how to use AniMart. We are here to help you with any questions you may have.",
      imageSrc: Advanced_ui,
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center justify-center items-center">
        <h2 className="text-4xl font-bold lg:text-5xl inline-flex bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400 ">
          Features
        </h2>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            className={`bg-card p-5 text-card-foreground shadow-md flex flex-col gap-3 max-h-96 hover:scale-[1.02] cursor-pointer ${
              index === 4 ? "md:col-span-2 col-span-1" : "col-span-1"
            }`}
            key={index}
          >
            <div className="flex items-center justify-center relative">
              <Image
                src={feature.imageSrc}
                alt="Speed Optimization"
                className="w-full h-auto"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  position: "relative",
                  aspectRatio: "3/ 2",
                  maxHeight: "202px",
                }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
        {/* <div className=" bg-card p-5 text-card-foreground">
          <div className="flex items-center justify-center">
            <Image
              src={features[0].imageSrc}
              alt="Speed Optimization"
              className="w-full h-auto"
              layout="fill"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">{features[0].name}</h3>
            <p className="mt-2 text-sm">{features[0].description}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Features;
