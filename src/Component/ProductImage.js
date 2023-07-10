import { useState } from "react";
import "./Sass/Products.scss";
export default function ProductImage({ images, main }) {
  const [mainImg, setMainImg] = useState(main);

  return (
    <>
      <div className="flex-1">
        <img
          src={mainImg.url}
          alt=""
          className="rounded-md h-[450px] w-full object-cover mb-5"
        />
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, i) => {
            return (
              <img
                key={i}
                src={image.url}
                alt=""
                className={`rounded-md h-[100px] w-full object-cover ${
                  image.url === mainImg.url ? "activeImg" : ""
                }`}
                onClick={() => setMainImg(images[i])}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
