import styled from "styled-components";
import { Form, Input, Typography } from "antd";

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormWrapper = styled(Form)`
  &&& {
    margin: 20px auto;
    padding: 20px;
  }

  max-width: 700px;
  width: 100%;
  border: 1px solid var(--border-color);
`;

export const FormItem = styled(Form.Item)`
  width: 100%;

  label {
    font-size: 16px;
    width: 150px;
    justify-content: flex-end;
  }

  &:last-child {
    margin-bottom: 0;

    button {
      float: right;
    }
  }
`;

export const Title = styled(Typography.Title)`
  margin: 20px auto;
`;

export const InputText = styled(Input)`
  width: 100%;
`;
