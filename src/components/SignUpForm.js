import { Form, Input, Button, Checkbox } from "antd";
/* import { useState } from "react"; */

/* const defaultFormState = {
  name: "",
  email: "",
  password: "",
}; */

function SignUpForm() {
/*   const [formState, setFormState] = useState(defaultFormState);

  const handleFormInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (elem) => {
    console.log("Hello there submit-handler");
    elem.preventDefault();
    setFormState(defaultFormState);
  };
 */

  return (
    <div>
      <h2>Sign Up</h2>

      <Form
        //onsubmit={handleSubmit}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUpForm;
