import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export default function Services() {
  return (
    <div className="bg-[#eaded7] py-9">
      <div className="md:w-4/5 w-full mx-auto p-5 md:p-7">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center items-center mb-5">
          <h3 className="text-3xl font-semibold capitalize mb-5 ">
            custom furniture <br />
            built only for you
          </h3>
          <p className="leading-8 text-amber-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            aliquid cumque aliquam tenetur ullam laudantium praesentium a
            maiores dignissimos optio!
          </p>
        </article>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-7 py-5">
          <div className="bg-[#c5a491] flex flex-col items-center p-7 rounded-md">
            <span className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
              <GiCompass className="text-3xl text-amber-900" />
            </span>
            <h4 className="text-3xl font-medium m-5">Mission</h4>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="bg-[#c5a491] flex flex-col items-center p-7 rounded-md">
            <span className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
              <GiDiamondHard className="text-3xl text-amber-900" />
            </span>
            <h4 className="text-3xl font-medium m-5">Vision</h4>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="bg-[#c5a491] flex flex-col items-center p-7 rounded-md">
            <span className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
              <GiStabbedNote className="text-3xl text-amber-900" />
            </span>
            <h4 className="text-3xl font-medium m-5">History</h4>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
