import styled from "styled-components";
import { Card } from "antd";

export const UserProfileWrapper = styled.div`
  width: 100%;
`;

export const OtherInfo = styled.div`
width: 100%;
display flex;
flex-wrap: wrap;
`;

export const DataCard = styled(Card)`
  &&& {
    margin-top: 20px;
    margin-right: 20px;
  }

  max-width: 500px;
  width: 100%;

  p > span:first-child {
    display: inline-block;
    width: 100px;
  }
`;
