import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import { createBrowserRouter,RouterProvider , Outlet } from "react-router-dom";
import { CardWrapper}  from "./src/components/body";
import About from "./src/components/about";
import Error from "./src/components/error";
import Menu from "./src/components/Menu";
import { Provider } from "react-redux";
import appStore from "./src/components/appStore";
import Cart from "./src/components/Cart";
import Main from "./src/components/Main";
import Accounts from "./src/components/Accounts";
import SignIn from "./src/components/SignIn";
import SignUp from "./src/components/SignUp";
import Payment from "./src/components/Payment";
import Footer from "./src/components/Footer";

let AppList = () => {
  return (
    <>
      <Provider store={appStore}>
      {/* <Header /> */}
  
      <Outlet/>
      
      {/* <Footer/> */}
      </Provider>
    </>
  );
};



const AppRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppList/>,
    children:[
      {
        path:"/",
        element:<Main/>

      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/restaurants/:resId",
        element:<Menu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/accounts",
        element:<Accounts/>
      },
      {
        path:"/cart/signup",
        element:<SignUp/>
      },
      {
        path:"/cart/signin",
        element:<SignIn/>
      }
      ,
      {
        path:"/cart/payment",
        element:<Payment/>
      }


    ],
    errorElement:<Error/>,
  },
  
])

let root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={AppRouter}/>);
