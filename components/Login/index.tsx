
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { FormWrapper, FormItem, InputText, Button } from "./Login.styles";

export type Login = {
  email: string;
  password: string;
};

type Props = {
    data: Login;
    onVariableChange: (value: Login) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

const loader = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default ({ data, onVariableChange, onSubmit, isLoading }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <FormWrapper
        layout="horizontal"
        onFinish={onSubmit}
      >
        <FormItem
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your valid email!",
            },
          ]}
        >
          <InputText
            size="large"
            placeholder="Enter your email"
            defaultValue={data.email}
            onChange={(e) => onVariableChange({...data, email: e.target.value})}
          />
        </FormItem>

        <FormItem
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <InputText
            type="password"
            placeholder="Enter your password"
            size="large"
            defaultValue={data.password}
            onChange={(e) => onVariableChange({...data, password: e.target.value})}
          />
        </FormItem>
        <FormItem>
          <Button size="large" type="primary" htmlType="submit">
            {isLoading ? <Spin indicator={loader} style={{color: '#fff'}} /> : 'Login'}
          </Button>
        </FormItem>
      </FormWrapper>
    </div>
  );
};
