import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { useState, } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../config";

const defaultFormState = {
  name: "",
  email: "",
  password: "",
};

function SignUpForm( ) {

  const navigate = useNavigate();

  const [formState, setFormState] = useState(defaultFormState);

  const handleFormInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    console.log("Hello there submit-handler");
    event.preventDefault();
    console.log(formState)
    let response = await axios.post(`${API_URL}/signup`, formState, {withCredentials: true});
    console.log(response.data)
    await setFormState(defaultFormState);
    navigate("/")
  };


  return (
    <div>
      <h2>Sign Up</h2>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          type="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input name="name" value={formState.name} onChange={handleFormInput}/>
        </Form.Item>

        <Form.Item
          label="Email"
          type="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
         <Input name="email" value={formState.email} onChange={handleFormInput}/>
        </Form.Item>

        <Form.Item
          label="Password"
          type="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="password" value={formState.password} onChange={handleFormInput}/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUpForm;
