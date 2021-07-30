import React, { useState } from "react";
import { connect } from "react-redux";
import "./css/Login.css";
import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  Input,
  Container,
  Label,
} from "reactstrap";
import { isAuthenticated } from "./utils";
import { toast } from "react-toastify";
import { login } from "./redux/actions/LoginAction";
import { useHistory, Redirect } from "react-router-dom";

function Login({ login }) {
  const history = useHistory();
  const [userDetail, setUserDetail] = useState({
    Email: "",
    Password: "",
  });

  function handleChange(event) {
    const { value } = event.target;
    setUserDetail({
      ...userDetail,
      [event.target.name]: value,
    });
  }

  const LoginEmp = (e) => {
    e.preventDefault();
    const { Email, Password } = userDetail;
    console.log("userDetail", Email, Password);
    if (Email && Password) {
      login(Email, Password);
    }
    if (localStorage.getItem("isLoggedIn") == "1") {
      history.push("/");
    } else {
      toast.error("Login Unsuccessfull");
    }
  };
  if (isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return (
    <Container fluid className="flex flexcenter">
      <div className="loginBox">
        <div className="textcenter">
          <h2
            style={{
              margin: "35px 0",
            }}
          >
            Login Form
          </h2>
        </div>
        <Form autoComplete="off" onSubmit={LoginEmp}>
          <FormGroup style={{ marginBottom: "20px" }}>
            <Label style={{ marginBottom: "5px" }}>Enter your Email Id</Label>
            <InputGroup>
              <Input
                placeholder="abc@xyz.com"
                name="Email"
                type="email"
                required
                onChange={handleChange}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label style={{ marginBottom: "5px" }}>Enter Your Password</Label>
            <InputGroup>
              <Input
                placeholder="Enter Password"
                minLength="8"
                name="Password"
                required
                onChange={handleChange}
              />
            </InputGroup>
          </FormGroup>
          <div className="textcenter" style={{ marginTop: "45px" }}>
            <Button color="primary" className="loginButton">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
