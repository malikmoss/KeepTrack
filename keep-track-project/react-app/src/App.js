import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing/index";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import AllItems from "./components/home/index";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./services/auth";
import { useDispatch } from "react-redux";
import Header from "./components/header";
import RegisterLogin from "./components/Register_login";
import Register from "./components/Register_login/register";
import Dashboard from "./components/Dashboard";

import Product from "./components/product";
import AddProduct from "./components/product/addProduct";

import Material from "./components/material";
import AddMaterial from "./components/material/addMaterial";
import ProductDetail from "./components/product/productDetail"
import EditProduct from "./components/product/editProduct"
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const id=localStorage.getItem("id")

  if(id){
    const email=localStorage.getItem("email")
    const username=localStorage.getItem("username")
    const user={
      id,
      username,
      email
    }
    dispatch({type:"session/SET_USER",payload:user})
  }

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage />
        </Route>
        <Route path="/register_login">
          <RegisterLogin
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/register">
          <Register
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/Product/:id">
          <ProductDetail />
        </Route>
        <Route path="/edit-product/:id">
          <EditProduct />
        </Route>

        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <Route path="/materials" exact={true}>
          <Material />
        </Route>
        <Route path="/add-material" exact={true}>
          <AddMaterial />
        </Route>
        <Route path="/products" exact={true}>
          <Product />
        </Route>
        <Route path="/add-product" exact={true}>
          <AddProduct />
        </Route>
        <Route path="/inventory" exact={true}>
          <AllItems />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
