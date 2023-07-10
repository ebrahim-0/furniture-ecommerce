// import { useState } from "react";
// import { FaCheck } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { add, sub } from "../reduxTK/Slice/CartSlice";

// export default function AddToCart({ product, colors, main }) {
//   const [mainColor, setMainColor] = useState(main);

//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);

//   console.log(cart);
//   return (
//     <>
//       <div className="flex gap-3 mt-6">
//         <span className="pr-24">Colors: </span>
//         {colors.map((color, i) => {
//           return (
//             <button
//               style={{ backgroundColor: color }}
//               key={i}
//               onClick={() => setMainColor(color)}
//               className="w-7 h-7 rounded-full flex justify-center items-center"
//               // className={mainColor === color ? "color-btn active" : "color-btn"}
//             >
//               {mainColor === color ? <FaCheck className="text-white" /> : null}
//             </button>
//           );
//         })}
//       </div>
//       <div>
//         <div className="text-4xl p-4 font-bold">
//           <button onClick={() => dispatch(sub())}>-</button>
//           <span className="mx-5">1</span>
//           <button onClick={() => dispatch(add())}>+</button>
//         </div>
//         <button
//           className="bg-[#6f4f3c] text-white px-4 py-2 rounded-md hover:bg-[#aa816a] hover:text-black transition-all duration-300"
//           onClick={() => dispatch(AddToCart(product))}
//         >
//           Add To Cart
//         </button>
//       </div>
//     </>
//   );
// }
