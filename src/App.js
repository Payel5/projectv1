import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DashBoard from "./DashBoard";
import Login from "./Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "./utils";

const SecretRouter = ({ component: Component, location, ...rest }) => (
  <Route
    location={location}
    {...rest}
    render={(props) =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <>
          <Redirect
            to={{
              pathname: "/login",
              state: { prevLocation: location.pathname },
            }}
          />
          {toast.info("Please login to view this page ...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
          })}
        </>
      )
    }
  />
);

function App() {
  return (
    <div>
      <ToastContainer autoClose={7000} />
      <Switch>
        <Route path="/login" component={Login} />
        <SecretRouter exact path="/" component={DashBoard} />
      </Switch>
    </div>
  );
}

export default App;
