import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../reduxTK/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function FeaturedProducts({ products }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const indexProducts = [6, 7, 10, 16, 17, 21];

  return (
    <>
      <div className="bg-slate-100 py-8">
        <h1 className="text-center text-5xl font-bold py-7 relative title">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-7 p-7 w-4/5 mx-auto">
          {products.length > 0 &&
            indexProducts.map((product) => {
              return (
                <Link
                  to={`products/${products[product].id}`}
                  key={products[product].id}
                  className="box w-full"
                >
                  <div className="image bg-slate-800 rounded">
                    <img
                      className="h-56 w-full rounded object-cover hover:opacity-60 transition-all duration-300"
                      src={products[product].image}
                      alt={products[product].description}
                    />
                  </div>
                  <p className="flex justify-between py-3 px-1 capitalize">
                    {products[product].name}
                    <span className="text-amber-500">
                      ${products[product].price / 100}
                    </span>
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
