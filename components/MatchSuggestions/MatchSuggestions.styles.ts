import styled from "styled-components";
import { Typography } from "antd";

export const SuggestionContainer = styled.div`
  padding: 20px;
`;

export const Title = styled(Typography.Title)`
  font-size: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
`;

export const UsersHead = styled(Typography.Text)`
  font-size: 28px;
  display: block;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
  margin-top: 40px;
`;

export const Users = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
