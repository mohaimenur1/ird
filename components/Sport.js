import Image from "next/image";

const Sport = () => {
  return (
    <div className="bg-indigo-500 mx-10 p-10 rounded-3xl mt-32 grid sm:grid-cols-1 md:grid-cols-3 mx-10 flex flex items-center justify-evenly">
      <div className="details flex m-4">
        <div className="w-28 h-28 bg-violet-300 rounded-3xl flex items-center justify-center">
          <Image src="/s1.png" width="40" height="40"></Image>
        </div>
        <div className="text flex flex-col ml-8 justify-center">
          <h3 className="font-bold text-white mb-4">
            Get that 11 line <br></br> in 30 days
          </h3>
          <div className="learn flex justify-between">
            <p className="text-violet-300">Learn more</p>
            <Image src="/ra.png" width="15" height="15"></Image>
          </div>
        </div>
      </div>
      <div className="details flex m-4">
        <div className="w-28 h-28 bg-violet-300 rounded-3xl flex items-center justify-center">
          <Image src="/s2.png" width="40" height="40"></Image>
        </div>
        <div className="text flex flex-col ml-8 justify-center">
          <h3 className="font-bold text-white mb-4">
            14 Days <br></br> sherd challenge
          </h3>
          <div className="learn flex justify-between">
            <p className="text-violet-300">Learn more</p>
            <Image src="/ra.png" width="15" height="15"></Image>
          </div>
        </div>
      </div>
      <div className="details flex m-4">
        <div className="w-28 h-28 bg-violet-300 rounded-3xl flex items-center justify-center">
          <Image src="/s3.png" width="40" height="40"></Image>
        </div>
        <div className="text flex flex-col ml-8 justify-center">
          <h3 className="font-bold text-white mb-4">
            Get flat belly <br></br> in 30 days
          </h3>
          <div className="learn flex justify-between">
            <p className="text-violet-300">Learn more</p>
            <Image src="/ra.png" width="15" height="15"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;
