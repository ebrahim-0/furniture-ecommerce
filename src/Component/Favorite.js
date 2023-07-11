import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../reduxTK/Slice/CartSlice";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

  console.log(favorite);
  return (
    <>
      <IoMdArrowRoundBack
        className="text-2xl text-amber-500 ml-24 mt-5"
        onClick={() => window.history.back()}
      />
      <div className="p-9">
        {favorite.length > 0 ? (
          <div className="overflow-auto">
            <table className="w-[500px] md:w-full table-auto">
              <thead>
                <tr>
                  <th className="border-b-2 p-2 pb-3">Item</th>
                  <th className="border-b-2 p-2 pb-3">Price</th>
                  <th className="border-b-2 p-2 pb-3">Add To Cart</th>
                </tr>
              </thead>
              <tbody>
                {favorite.map((product) => {
                  return (
                    <tr
                      key={product.id}
                      className="text-base md:text-lg text-center text-slate-400"
                    >
                      <td className="border-b-2 p-2 py-8 flex items-center gap-7 capitalize">
                        <img
                          src={product.image}
                          alt=""
                          className="w-[50px] h-[40px] md:w-[100px] md:h-20 object-cover rounded-md"
                        />
                        {product.name}
                      </td>
                      <td className="border-b-2 p-2 py-8 text-amber-500">
                        ${product.price / 100}
                      </td>

                      <td className="border-b-2 p-2 py-8">
                        <button
                          className="bg-[#6f4f3c] text-white px-4 py-2 rounded-md hover:bg-[#aa816a] hover:text-black transition-all duration-300"
                          onClick={() => {
                            dispatch(addToCart(product));
                          }}
                        >
                          Add To Cart
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center mt-32 text-base md:text-3xl">
            <h1 className="my-6">Your Cart is empty</h1>
            <Link
              to="/products"
              className="bg-amber-500 text-2xl text-black px-4 py-1 rounded-md hover:bg-[#aa816a] hover:text-white transition-all duration-300"
            >
              Fill it
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
