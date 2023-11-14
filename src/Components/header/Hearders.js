import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { PiGoogleChromeLogoThin } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import styled from 'styled-components';
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const { Content } = Layout;
const { Text } = Typography;

const BackgroundContainer = styled(Content)`
  background-color: #ff0390;
  background-size: cover;
  
  height: 8vh;
  
  
 
`;

function Headers() {
  return (
    <Layout>
      <BackgroundContainer>
        <Row  justify="space-around" align="middle">
          <Col span={6} style={{ marginTop:'10px'}}>
            <Text type="white" strong style={{ fontSize: '10px', color: 'white' }} >
               suivez-nous sur:
            </Text>
            <FaFacebookF style={{ fontSize: '15px', color: 'white',marginLeft:'20' }} />
            <FaTwitter style={{ fontSize: '15px', color: 'white',marginLeft:'20' }} />
            <IoLogoGoogleplus  style={{ fontSize: '15px', color: 'white',marginLeft:'20' }} />
            <PiGoogleChromeLogoThin  style={{ fontSize: '15px', color: 'white',marginLeft:'20' }} />
            <FaWifi  style={{ fontSize: '15px', color: 'white',marginLeft:'20' }} />
            <RiLinkedinLine  style={{ fontSize: '15px', color: 'white',marginLeft:'20' }} />
          </Col>
          {/* Ajoutez d'autres colonnes ici pour plus de contenu */}
          <Col span={6} style={{ display:'flex', marginTop:'10px'}}>
            <div style={{ display:'flex' }}>
            <IoIosMail  style={{ fontSize: '15px', color: 'white',marginTop:'5px' }} />
            <Text type="white" strong style={{ fontSize: '15px', color: 'white' }} >
            Email:demo@example.com
            </Text>
            </div>
            <div style={{ display:'flex',marginLeft:'20px' }}>
            <BsFillTelephoneFill  style={{ fontSize: '10px', color: 'white',marginTop:'8px' }} />
            <Text type="white" strong style={{ fontSize: '10px', color: 'white',marginTop:'4px' }} >
            Telephone:77 250 08 12 fr
            </Text>
            
            </div>
          </Col>
        </Row>
      </BackgroundContainer>
    </Layout>
  );
}

export default Headers;
