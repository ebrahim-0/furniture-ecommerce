import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, clear, deleteFromCart, sub } from "../reduxTK/Slice/CartSlice";

import { AiFillDelete } from "react-icons/ai";
export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += (product.quantity * product.price) / 100;
    return acc;
  }, 0);

  console.log(cart);
  console.log(totalPrice);

  return (
    <>
      <div className="p-9 min-h-[100vh]">
        {cart.length > 0 ? (
          <div className="overflow-auto">
            <table className="w-[500px] md:w-full table-auto">
              <thead>
                <tr>
                  <th className="border-b-2 p-2 pb-3">Item</th>
                  <th className="border-b-2 p-2 pb-3">Price</th>
                  <th className="border-b-2 p-2 pb-3">Quantity</th>
                  <th className="border-b-2 p-2 pb-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
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
                      <td className="border-b-2 p-2 py-8 text-base md:text-3xl font-bold">
                        <button onClick={() => dispatch(sub(product))}>
                          -
                        </button>
                        <span className="px-3">{product.quantity}</span>
                        <button onClick={() => dispatch(add(product))}>
                          +
                        </button>
                      </td>
                      <td className="border-b-2 p-2 py-8">
                        ${(product.quantity * product.price) / 100}
                      </td>
                      <td>
                        <AiFillDelete
                          className="text-red-700 cursor-pointer text-base md:text-3xl"
                          onClick={() => dispatch(deleteFromCart(product))}
                        />
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
        {cart.length > 0 && (
          <div className="my-9 flex justify-between">
            <Link
              to="/products"
              className="bg-amber-500 text-sm md:text-xl text-black  mr-1 md:px-4 py-1 rounded-md hover:bg-[#aa816a] hover:text-white transition-all duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              className="bg-black text-sm md:text-xl text-white  md:px-4 py-1 mr-20 rounded-md hover:bg-[#aa816a] hover:text-white transition-all duration-300"
              onClick={() => dispatch(clear())}
            >
              Clear Shopping Cart
            </Link>
          </div>
        )}
        {cart.length > 0 && (
          <div className="p-8 px-12 capitalize w-fit border-2 rounded-md grid grid-cols-1 gap-1 text-sm md:text-xl">
            <h4 className="grid grid-cols-2 gap-5 md:gap-6 mb-4">
              subtotal :<span>${totalPrice.toFixed(3)}</span>
            </h4>
            <p className="grid grid-cols-2 gap-5 md:gap-6 mb-4 border-b-2 pb-5">
              Shipping Fee :<span>$5.34</span>
            </p>
            <h4 className="grid grid-cols-2 gap-5 md:gap-6 mt-1 text-sm md:text-xl font-bold">
              Order Total :<span> ${(totalPrice + 5.34).toFixed(3)}</span>
            </h4>
          </div>
        )}
      </div>
    </>
  );
}
