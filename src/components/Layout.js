import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  overflow: auto;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CenterWrapper = styled(LeftWrapper)`
  flex: 2;
`;

const Layout = ({ Left, Center }) => (
  <Wrapper>
    <LeftWrapper>{Left}</LeftWrapper>
    <CenterWrapper>{Center}</CenterWrapper>
  </Wrapper>
);

export default Layout;
