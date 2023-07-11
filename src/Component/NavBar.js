import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Sass/NavBar.scss";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    setNav(!nav);
  };
  const navLink = (mobile) => {
    return (
      <>
        <NavLink
          to="/"
          onClick={mobile}
          className="hover:text-amber-500 transition-all duration-300 p-3 md:p-0"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          onClick={mobile}
          className="hover:text-amber-500 transition-all duration-300 p-3 md:p-0"
        >
          About
        </NavLink>
        <NavLink
          to="products"
          onClick={mobile}
          className="hover:text-amber-500 transition-all duration-300 p-3 md:p-0"
        >
          Products
        </NavLink>
        <NavLink
          to="/favorite"
          onClick={mobile}
          className="hover:text-amber-500 transition-all duration-300 p-3 md:p-0"
        >
          Favorite
        </NavLink>
        <NavLink
          to="/cart"
          onClick={mobile}
          className="flex text-3xl items-center gap-3 cursor-pointer hover:text-amber-500 transition-all duration-300 p-3 md:p-0"
        >
          Cart
          <FaShoppingCart className="" />
          <span className="text-base w-6 h-6 flex items-center justify-center rounded-full text-white bg-amber-500 relative right-5 -top-3">
            {cart.length}
          </span>
        </NavLink>
      </>
    );
  };

  return (
    <div className="bg-slate-100 sticky top-0 z-40">
      <div className="container mx-auto w-5/6 flex justify-between items-center p-3">
        <div className="text-amber-500 text-4xl">
          <Link to="/">Furniture</Link>
        </div>
        <nav className="gap-10 items-center hidden md:flex">{navLink()}</nav>

        <div onClick={handleClick} className="md:hidden z-20">
          {!nav ? (
            <FaBars className={` text-3xl relative right-8`} />
          ) : (
            <GrFormClose className={` text-3xl relative right-8`} />
          )}
        </div>

        <nav
          className={
            nav
              ? `absolute top-0 left-0 w-full h-screen bg-white z-10  flex flex-col justify-center items-center`
              : "hidden"
          }
        >
          {navLink(handleClick)}
        </nav>
      </div>
    </div>
  );
}
