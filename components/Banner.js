import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[url('/bg.png')]">
      <main className="grid sm:grid-cols-1 md:grid-cols-2 mx-10">
        <div className="first-section flex flex-col justify-center">
          <h2 className="font-bold text-6xl  mb-10 mx-3">
            Healthy in side <br></br>
            <span className="text-purple-500">fresh</span> out side
          </h2>
          <p className="text-neutral-600 text-base mb-10 mx-3">
            Exercise is a very important need for our body. Health and <br></br>
            fitness will be obtained if you can do regular exercise and{" "}
            <br></br> run a healthy routine.
          </p>
          <div className="buttons flex">
            <div className="mb-10 rounded-xl shadow-2xl shadow-black py-3 px-5 font-normal text-base text-white md:w-64 sm:w-44 md:h-14 sm:h-10 bg-sky-900 flex items-center justify-between">
              <span>Get started </span>
              <Image src="/rarrow.png" width="26" height="26"></Image>
            </div>
            <div className="ml-9 mb-10 rounded-xl shadow-2xl shadow-black py-3 px-5 font-normal text-base text-sky-900 md:w-44 sm:w-32 md:h-14 sm:h-10 bg-white flex items-center justify-between">
              <Image src="/play.png" width="26" height="26"></Image>
              <span>Learn more</span>
            </div>
          </div>
          <div className="brands mb-10 mt-14">
            <h2>Brands:</h2>
            <div className="brands flex justify-between">
              <Image src="/ni.png" width="53" height="54"></Image>
              <Image src="/add.png" width="53" height="54"></Image>
              <Image src="/pu.png" width="53" height="54"></Image>
              <Image src="/ree.png" width="53" height="54"></Image>
            </div>
          </div>
        </div>
        <div className="second-section flex justify-center items-center">
          {/* <img className="" src={BannerImg} alt="logo"></img> */}
          <Image src="/b1.png" width="400" height="500"></Image>
        </div>
      </main>
    </div>
  );
};

export default Banner;
