import styled from "styled-components";
import { Form, Input, Button as AntButton } from "antd";

export const FormWrapper = styled(Form)`
  &&& {
    margin: auto;
    padding: 20px;
    margin-top: 50px;
  }

  max-width: 500px;
  border: 1px solid var(--border-color);
`;

export const FormItem = styled(Form.Item)`
  width: 100%;

  label {
    font-size: 16px;
    width: 80px;
    justify-content: flex-end;
  }

  &:last-child {
    margin-bottom: 0;

    button {
      float: right;
    }
  }
`;

export const Button = styled(AntButton)`
  width: calc(100% - 80px);
`;

export const InputText = styled(Input)`
  width: 100%;
`;
