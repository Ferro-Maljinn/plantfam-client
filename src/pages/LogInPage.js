import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config";

const defaultFormState = {
  name: "",
  password: "",
};

export default function LogInPage({ setLoggedIn }) {
  const navigate = useNavigate();

  const [logInState, setLoginState] = useState(defaultFormState);
  const [error, setError] = useState(null);

  const handleLoginInput = (event) => {
    setLoginState({ ...logInState, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const user = await axios.post(`${API_URL}/login`, logInState, {
        withCredentials: true,
      });
      setLoginState(defaultFormState);
      user && setLoggedIn(true);
      navigate("/");
    } catch (err) {
      setError("Username or password wrong, please try again");
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="on"
      >
        <Form.Item
          label="Username"
          type="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="name"
            value={logInState.name}
            onChange={handleLoginInput}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          type="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            name="password"
            value={logInState.password}
            onChange={handleLoginInput}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {/* if try catch from handleLogin throws an error, 
          then the p tag will be displayed with an error message */}
          {error && <h1>{error}</h1>}

          <Button onClick={handleLogin} type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
