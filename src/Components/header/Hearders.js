import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;
const BackgroundContainer = styled(Content)`
background-color:#ff0390;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 8vh;
`;

function Hearders() {
  return (
    <Layout>
      <BackgroundContainer>
        {/* Your other content goes here */}
      </BackgroundContainer>
    </Layout>
  );
}

export default Hearders;