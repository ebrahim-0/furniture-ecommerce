import "./Sass/Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../reduxTK/Slice/ProductsSlice";
import FeaturedProducts from "./FeaturedProducts";
import Services from "./Services";
import Landing from "./Landing";
import { BrowserRouter, Routes } from "react-router-dom";

export default function Home() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <>
      <Landing />
      <FeaturedProducts products={products} />
      <Services />
    </>
  );
}
