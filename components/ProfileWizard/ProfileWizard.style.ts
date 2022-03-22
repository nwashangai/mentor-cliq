import styled from "styled-components";
import { Steps } from "antd";

export const Wizard = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
`;

export const WizardContainer = styled(Steps)``;

export const Tab = styled(Steps.Step)``;

export const ControlWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const WizardBody = styled.div`
  width: 100%;
  min-height: calc(100vh - 280px);
  max-height: calc(100vh - 200px);
  overflow: auto;
  background: var(--pure-white);
  margin: 20px 0;
`;
