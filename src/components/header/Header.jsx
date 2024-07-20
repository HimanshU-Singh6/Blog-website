import React from "react";
import Button from "../Button";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import {login,logout} from "../../store/authSlice"
import { useDispatch } from "react-redux";


const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const buttonHandler = () => {
    if (isLogin) {
      authService.logout().then(()=>{
        dispatch(logout())
      }).catch(()=>{
        console.log("error while getting user logged out!!!")
      });
    }
    else{
      console.log("hi")
      navigate('/login')
    }
  };

  const navigate = useNavigate();

  const navItems = [
    { name: "home", slug: "/" },
    { name: "All Post", slug: "/all-posts" },
    { name: "Add Post", slug: "/add-post" },
  ];

  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.add("light");
  }, [darkTheme]);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <nav>
      <div className="md:flex flex-wrap justify-between py-4 bg-background-900 text-text-50 px-4 items-center">
        <div>logo</div>
        <ul className="flex flex-wrap gap-10 capitalize text-xl">
          {navItems.map((nav) => (
            <li onClick={() => navigate(nav.slug)} key={nav.slug}>
              {nav.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          <div onClick={buttonHandler}>
            <Button classname=" bg-primary-400 hover:bg-primary-600 text-text-50">
            {isLogin ? "Logout" : "Login"}
            </Button>
          </div>

          <div onClick={toggleDarkMode}>
            <Button classname=" bg-primary-400 hover:bg-primary-600 text-text-50" >
              theme
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
