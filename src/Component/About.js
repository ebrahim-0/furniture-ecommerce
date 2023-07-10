import aboutBcg from "../image/about-bcg.jpeg";
import "./Sass/About.scss";
export default function About() {
  return (
    <>
      <div className="container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 p-8">
        <img
          src={aboutBcg}
          alt=""
          className="rounded-md h-[500px] w-full object-cover"
        />
        <div className="mb-7">
          <h3 className="text-4xl font-bold mb-12 mt-3 capitalize relative head">
            our story
          </h3>
          <p className="text-slate-500 leading-9">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quibusdam minus itaque doloremque officiis dolores magni, doloribus
            aperiam commodi sed accusamus. Eaque a repellendus, esse voluptatum
            aliquam accusantium officia, aut nisi expedita et laudantium?
            Veritatis rem mollitia quod delectus itaque placeat alias, obcaecati
            dolorum facilis quibusdam dicta eveniet quis repellendus cupiditate
            eaque doloremque eum sed iure blanditiis numquam excepturi nostrum!
          </p>
        </div>
      </div>
    </>
  );
}
