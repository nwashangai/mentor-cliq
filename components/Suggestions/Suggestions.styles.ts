import styled from "styled-components";
import { Card, Typography } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: auto;
  margin-top: 20px;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Title = styled(Typography.Title)`
  width: fit-content;

  &&& {
    margin: 20px auto;
  }
`;

export const Note = styled(Card)`
  &&& {
    margin: auto;
  }

  width: 100%;
  max-width: 700px;
  
  p {
      color: var(--text-color);
  }
`;
