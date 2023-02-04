import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="p-8">
        <div className="navbar-container flex items-center justify-between">
          <div className="flex jusfity-center items-center">
            {/* <img
              src={Logo}
              style={{ width: "35px", height: "35px" }}
              alt="logo"
            ></img> */}

            <Link
              href="/"
              className="bg-sky-500 text-white text-xl rounded-xl w-16 h-9 text-center flex justify-center items-center"
            >
              Gym
            </Link>
            <Link
              href="/"
              className="text-sky-500 font-normal ml-2 font-bold text-lg"
            >
              Baran
            </Link>
          </div>
          <div className="nav-links hidden md:flex items-center">
            <Link
              href="/"
              className="nav-link text-slate-900 px-3 font-semibold"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="nav-link text-slate-900 px-3 font-semibold"
            >
              Program
            </Link>
            <Link
              href="/About"
              className="nav-link px-3 text-slate-900 font-semibold"
            >
              Blog
            </Link>
            <Link
              href="/About"
              className="nav-link px-3 text-slate-900 font-semibold"
            >
              About Us
            </Link>
            <Link
              href="/About"
              className="nav-link  font-semibold bg-sky-900 text-white text-xl rounded-xl w-28 h-12 shadow-lg shadow-blue-500/50 text-center flex justify-center items-center"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
