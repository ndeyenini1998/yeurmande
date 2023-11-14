import React from 'react';
import { Layout, Typography, Col, Carousel,Text } from 'antd';
import styled from 'styled-components';
import { Card, Row } from 'antd';
import imag from '../../Images/couses.png'
import image from '../../Images/two.png'
import images from '../../Images/couses2.png'

import sectionImage1 from '../../Images/slide.png';
import sectionImage2 from '../../Images/slide.png';
import sectionImage3 from '../../Images/slide.png';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

const BackgroundContainer = styled(Content)`
  height: 80vh;
  width: 100%;
  position: relative;
`;

const CarouselOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  // color: #fff;
  

  border-radius: 5px; /* Ajout d'une bordure arrondie pour un look plus esthétique */
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ffff;
  color: #fff;
  justify-content: end;
  margin: 0 1em;

  &:hover {
    background-color: #ff0390;
    color: #fff;
  }
`;
const CardCol = styled(Col)`
  margin: 20px; 
`;

function Accueil() {
  return (
    <Layout>
      <BackgroundContainer>
        <Carousel autoplay>
          <div>
            <img src={sectionImage1} alt="slide1" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <img src={sectionImage2} alt="slide2" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <img src={sectionImage3} alt="slide3" style={{ width: '100%', height: '100%' }} />
          </div>
        </Carousel>
        <CarouselOverlay>
          <Title level={1} style={{color: '#fff',fontSize:'34px' }}>NOUS POUVONS AIDER QUELQU'UN</Title>
          <Paragraph style={{ textAlign: 'justify', width: '550px',color: '#fff',left:'30px' }}>
            L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le privilège de découvrir lors d'une activité de bénévolat organisée par les Bakelistes. Aujourd'hui, en tant que Bakeli School of Technology, une école de formation dans le domaine du numérique, nous nous engageons à apporter notre soutien à cet orphelinat en favorisant sa digitalisation, notamment dans le traitement de leurs images numériques et la gestion de leurs demandes de soutien. Cette note conceptuelle a été élaborée dans le but de concrétiser cette vision et d'assister l'orphelinat dans la création d'un site internet dédié à sa cause.
          </Paragraph>
          <div style={{ marginTop: '50px' }}>
            <Button>FAIRE UN DON MAINTENANT</Button>
            <Button>APPRENDRE ENCORE PLUS</Button>
          </div>
        </CarouselOverlay>
      </BackgroundContainer>
      <Title level={1} style={{ marginTop:"120px" }}>NOs CAUSES</Title>
      <Paragraph style={{fontSize:'15px' }}>Notre orphelinat offre de l'aide et de l'espoir aux enfants qui en ont besoin.
     </Paragraph>
     <Row type="flex" justify="center">
      <CardCol  xs={24} sm={12} md={8} lg={6}>
        <Card
          bordered
          cover={<img alt="example" src={imag} style={{ width: '100%', height: 'auto' }} />}
        >
          <Title level={4}>Les enfants doivent recevoir une éducation</Title>
          <Paragraph>Lorem ipsum dolor sit amet, onsectetur adipiscing contre ectetur nulla. Sed à ullamcorper risus.</Paragraph>
        </Card>
      </CardCol >
      <CardCol  xs={24} sm={12} md={8} lg={6}>
        <Card
          bordered
          cover={<img alt="example" src={image} style={{ width: '100%', height: 'auto' }} />} 
        >
          <Title level={4}>Apportez de l'électricité et de la lumière</Title>
          <Paragraph>Lorem ipsum dolor sit amet, onsectetur adipiscing contre ectetur nulla. Sed à ullamcorper risus.</Paragraph>
        </Card>
      </CardCol >
      <CardCol  xs={24} sm={12} md={8} lg={6}>
        <Card
          bordered
          cover={<img alt="example" src={images} style={{ width: '100%', height: 'auto' }} />} 
        >
          <Title level={4} style={{ marginTop:"50px" }}>Objets porteurs d'eau </Title>
          <Paragraph>Lorem ipsum dolor sit amet, onsectetur adipiscing contre ectetur nulla. Sed à ullamcorper risus.</Paragraph>
        </Card>
      </CardCol >
    </Row>
    </Layout>
  );
}

export default Accueil;