import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reduxTK/Slice/ProductsSlice";
import { Link } from "react-router-dom";
import { fetchProductsByCategories } from "../reduxTK/Slice/CategoriesSlice";
import { addToCart } from "../reduxTK/Slice/CartSlice";
import { BsFillBookmarkFill } from "react-icons/bs";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../reduxTK/Slice/FavoriteSlice";

export default function Products() {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductsByCategories());

    return () => {
      console.log("test");
    };
  }, []);

  const filterCategory = (arr) => {
    return [...new Set(arr)];
  };

  const category = products.map((product) => product.category);

  const allCategory = filterCategory(category);

  return (
    <>
      <h4 className="text-center text-5xl font-bold py-11 relative title">
        Our Products
      </h4>
      <div className="flex items-center justify-between container mx-auto w-2/6 mt-5">
        <h4 className="text-center">{categories.length} Products Found</h4>
      </div>
      <div className="grid md:grid-cols-5 container mx-auto w-5/6 p-7 pt-0">
        <aside className="flex flex-col">
          <div className="sticky top-24">
            <h1 className="text-lg font-semibold">Category</h1>
            <Link
              className="text-slate-400 py-1 btn"
              onClick={(e) => {
                dispatch(fetchProductsByCategories());

                document.querySelectorAll(".btn").forEach((btn) => {
                  if (btn.classList.contains("text-red-500", "font-bold")) {
                    btn.classList.remove("text-red-500", "font-bold");
                  } else {
                    e.target.classList.add("text-red-500", "font-bold");
                  }
                });
              }}
            >
              All
            </Link>
            {products.length > 0 ? (
              allCategory.map((category, i) => {
                return (
                  <button
                    key={i}
                    className="text-slate-400 py-1 block btn"
                    onClick={(e) => {
                      dispatch(fetchProductsByCategories(e.target.textContent));

                      document.querySelectorAll(".btn").forEach((btn) => {
                        if (
                          btn.classList.contains("text-red-500", "font-bold")
                        ) {
                          btn.classList.remove("text-red-500", "font-bold");
                        } else {
                          e.target.classList.add("text-red-500", "font-bold");
                        }
                      });
                    }}
                  >
                    {category}
                  </button>
                );
              })
            ) : (
              <h1>No Category</h1>
            )}
          </div>
        </aside>

        <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 col-span-4 gap-7 p-7">
          {categories.length > 0 ? (
            categories.map((product) => {
              return (
                <div className="box w-full" key={product.id}>
                  <Link to={`${product.id}`}>
                    <div className="image bg-slate-800 rounded">
                      <img
                        className="h-56 w-full rounded object-cover hover:opacity-60 transition-all duration-300"
                        src={product.image}
                        alt={product.description}
                        // loading="lazy"
                      />
                    </div>
                    <p className="flex justify-between py-3 px-1 capitalize">
                      {product.name}
                      <span className="text-amber-500">
                        ${product.price / 100}
                      </span>
                    </p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#6f4f3c] text-white px-4 py-2 rounded-md hover:bg-[#aa816a] hover:text-black transition-all duration-300"
                      onClick={() => {
                        dispatch(addToCart(product));
                      }}
                    >
                      Add To Cart
                    </button>
                    {sessionStorage.getItem(`productId${product.id}`) ===
                    product.id ? (
                      <BsFillBookmarkFill
                        className="text-2xl text-red-800"
                        onClick={(e) => {
                          console.log(
                            e.target.classList.toggle("text-red-800")
                          );
                          dispatch(deleteFromFavorite(product));
                          sessionStorage.setItem(`productId${product.id}`, "");
                        }}
                      />
                    ) : (
                      <BsFillBookmarkFill
                        className="text-2xl"
                        onClick={(e) => {
                          console.log(
                            e.target.classList.toggle("text-red-800")
                          );

                          dispatch(addToFavorite(product));
                          sessionStorage.setItem(
                            `productId${product.id}`,
                            product.id
                          );
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Data</h1>
          )}
        </article>
      </div>
    </>
  );
}
