import React from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import { useState, } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import { API_URL } from "./config";

const defaultFormState = {
  name: "",
  password: "",
};

function LogInForm() {

  const navigate = useNavigate();

  const [logInState, setLoginState] = useState(defaultFormState);

  const handleLoginInput = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    setLoginState({ ...logInState, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(logInState);
    let response = await axios.post(`${API_URL}/Login`, logInState, {
      withCredentials: true,
    });
    console.log(response.data, "response data");
    await setLoginState(defaultFormState);
    navigate("/home")
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
          <Input name="name" value={logInState.name} onChange={handleLoginInput}/>
        </Form.Item>

        <Form.Item
          label="Email"
          type="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
         <Input name="email" value={logInState.email} onChange={handleLoginInput}/>
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
          <Input.Password name="password" value={logInState.password} onChange={handleLoginInput}/>
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
          <Button onClick={handleLogin} type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LogInForm;