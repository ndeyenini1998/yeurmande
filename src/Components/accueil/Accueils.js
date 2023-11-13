import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import sectionImage from '../../Images/Section.png';
const { Content } = Layout;

const BackgroundContainer = styled(Content)`
background-image: url(${sectionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
`;

function Accueil() {
  return (
    <Layout>
      <BackgroundContainer>
        {/* Your other content goes here */}
      </BackgroundContainer>
    </Layout>
  );
}

export default Accueil;
