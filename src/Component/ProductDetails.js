import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduct } from "../reduxTK/Slice/ProductDetailsSlice";
import ReactStars from "react-stars";
import ProductImage from "./ProductImage";
import { addToCart } from "../reduxTK/Slice/CartSlice";
export default function ProductDetails() {
  const { productId } = useParams();
  const product = useSelector((state) => state.details);

  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  console.log(product);
  console.log(cart);

  const { name, price, description, stock, stars, reviews, company, images } =
    product;

  return (
    <>
      <div className=" container w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 p-8">
        {Array.isArray(images) && (
          <ProductImage images={images} main={images[0]} />
        )}
        <div className="mb-7 stars">
          <h1 className="text-4xl capitalize">{name}</h1>

          <div className="flex items-center">
            <ReactStars
              count={5}
              size={32}
              color2={`#f59e0b`}
              edit={false}
              value={stars}
            />
            <span>({reviews} customer reviews)</span>
          </div>
          <h4 className="text-[#6f4f3c] text-2xl font-medium my-4">
            ${price / 100}
          </h4>
          <p className="leading-9 text-lg mb-3">{description}</p>
          <p className="w-80 grid grid-cols-2 text-xl mb-3">
            <span className="font-bold pr-7">Available: </span>
            {stock ? "In Stock" : "Out Of Stock"} ({stock})
          </p>
          <p className="w-80 grid grid-cols-2 text-xl mb-3">
            <span className="font-bold pr-7">SKU: </span>
            {productId}
          </p>
          <p className="w-80 grid grid-cols-2 text-xl mb-3">
            <span className="font-bold pr-7">Brand: </span>
            {company}
          </p>
          <hr />
          <div className="py-4 my-8">
            {stock > 0 ? (
              <button
                className="bg-[#6f4f3c] text-white px-4 py-2 rounded-md hover:bg-[#aa816a] hover:text-black transition-all duration-300"
                onClick={() => {
                  dispatch(addToCart(product));
                  navigate("/cart");
                }}
              >
                Add To Cart
              </button>
            ) : (
              <h4 className="text-center text-3xl font-bold">Out Of Stock</h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
