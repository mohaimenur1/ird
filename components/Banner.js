const Banner = () => {
  return (
    <div>
      <main className="grid sm:grid-cols-1 md:grid-cols-2 mx-20">
        <div className="first-section flex flex-col justify-center">
          <h2 className="font-bold text-6xl mb-10 mx-3">
            Healthy in side <br></br>
            <span className="text-purple-500">fresh</span> out side
          </h2>
          <p className="text-neutral-600 text-base mb-10 mx-3">
            Exercise is a very important need for our body. Health and <br></br>
            fitness will be obtained if you can do regular exercise and{" "}
            <br></br> run a healthy routine.
          </p>
          <button className="mb-10 rounded-full shadow-2xl shadow-black py-3 px-5 font-medium text-2xl text-white w-72 h-20">
            Learn more
          </button>
          <button className="mb-10 rounded-full shadow-2xl shadow-black py-3 px-5 font-medium text-2xl text-white w-72 h-20">
            Learn more
          </button>
        </div>
        <div className="second-section flex justify-center items-center">
          {/* <img className="" src={BannerImg} alt="logo"></img> */}
        </div>
      </main>
    </div>
  );
};

export default Banner;
