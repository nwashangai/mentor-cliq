import styled from "styled-components";
import { Button, Typography } from "antd";
import Img from "next/image";

export const UserContainer = styled.div<{ isBadge?: boolean }>`
  position: relative;
  display: flex;
  width: 700px;
  margin-top: 20px;
  background-color: var(--pure-white);
  padding: 20px;
  ${({ isBadge }) => isBadge ? 'margin-right: 10px;': ''}
`;

export const SuggestionButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Image = styled(Img)`
  width: 200px;
  height: 300px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 10px;
`;

export const Name = styled(Typography.Text)`
  font-size: 25px;
  font-weight: bold;
`;

export const Department = styled(Typography.Text)`
  &&& {
    color: var(--text-color);
  }

  font-size: 16px;
`;

export const Region = styled(Typography.Text)`
  &&& {
    color: var(--text-color);
  }

  margin-top: auto;
  > span {
    color: var(--text-color-secondary);
  }
`;
