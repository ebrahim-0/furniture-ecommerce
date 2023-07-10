import { Link } from "react-router-dom";
import { addToCart } from "../reduxTK/Slice/CartSlice";
import { useDispatch } from "react-redux";

export default function FeaturedProducts({ products }) {
  const dispatch = useDispatch();

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
                <div>
                  <Link
                    className="box w-full"
                    key={product}
                    to={`products/${products[product].id}`}
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
                  <div>
                    <button
                      className="bg-[#6f4f3c] text-white px-4 py-2 rounded-md hover:bg-[#aa816a] hover:text-black transition-all duration-300"
                      onClick={() => dispatch(addToCart(products[product]))}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
