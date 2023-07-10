import { Link } from "react-router-dom";
import bcg from "../image/bcg.jpeg";
import bcg2 from "../image/bcg-2.jpeg";

export default function Landing() {
  return (
    <>
      <div className="container mx-auto xl:w-4/5 flex flex-col lg:flex-row justify-center items-center gap-32 my-52 lg:my-0 p-12">
        <div className="transition-all duration-300 w-full lg:w-2/5">
          <h1 className="text-5xl md:text-4xl xl:text-5xl font-bold ">
            Design Your
          </h1>
          <h1 className="text-5xl md:text-4xl xl:text-5xl font-bold mb-7">
            Comfort Zone
          </h1>
          <p className="text-gray-400 leading-7 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            architecto doloribus tempore adipisci autem odio voluptate ad
            possimus minus dolorem?
          </p>
          <Link
            to="/products"
            className="bg-amber-500 mt-7 px-3 py-2 rounded text-white hover:text-black transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
        <div className="p-14 relative right">
          <img
            src={bcg}
            alt=""
            className="block relative object-cover rounded-[4px] h-[550px] right-0 z-10"
          />
          <img
            src={bcg2}
            alt=""
            className="block absolute object-cover  w-64 rounded-[4px] bottom-[56px] right-[350px] z-10"
          />
        </div>
      </div>
    </>
  );
}
