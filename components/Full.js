import Image from "next/image";

const Full = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 mx-10 mt-32 sm:order-last">
      <Image src="/fb.png" width="400" height="500" className="mb-10"></Image>
      <div className="details">
        <h1 className="text-5xl mb-8">
          Best full body <br></br> workout to lose fat
        </h1>
        <p className="mb-12 tracking-wider text-stone-400 leading-7">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.{" "}
        </p>
        <div className="buttons flex">
          <div className="mb-10 rounded-xl shadow-2xl shadow-black py-3 px-5 font-normal text-base text-white md:w-64 sm:w-44 md:h-14 sm:h-10 bg-sky-900 flex items-center justify-between">
            <span>Get started </span>
            <Image src="/rarrow.png" width="26" height="26"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Full;
