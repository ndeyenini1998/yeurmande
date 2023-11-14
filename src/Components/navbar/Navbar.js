import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Logo from "../../Images/logo.png";

function Navbar(props,) {
  const handleMenuClick = (e) => {
    // Ajoutez le traitement ici en fonction des éléments du menu cliqués
    console.log("Clicked on menu item:", e.key);
  };

  return (
    <Menu onClick={handleMenuClick} {...props}>
      <Menu.Item key="team">Notre équipe</Menu.Item>
      <Menu.Item key="sponsors">Nos parrains</Menu.Item>
      <Menu.Item key="partners">Nos partenaires</Menu.Item>
    </Menu>
  );
}

const Nav = ({isInline}) => {
  return (
    <div style={{ padding: "10px", background: "#ffff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {/* Logo avant Accueil */}
      <div>
        <img src={Logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
      </div>
      {/* Elements textuels à centrer */}
      <div>
        <Menu theme="#fff" mode={isInline?"inline":"horizontal" }>
          <Menu.Item key="home">Accueil</Menu.Item>
          <Dropdown overlay={<Navbar />} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} href="/">
              Qui sommes-nous?
            </a>
          </Dropdown>
          <Menu.Item key="programs">Programmes</Menu.Item>
          <Menu.Item key="requests">Demandes</Menu.Item>
          <Menu.Item key="gallery">Galerie</Menu.Item>
          <Menu.Item key="contact">Contactez-nous</Menu.Item>
        </Menu>
         {/* Bouton à droite */}
      
      </div>
      <Button style={{backgroundColor:'#ff0390',color:"#ffff" }}>
        Faire un don
      </Button>
    </div>
  );
};

export default Nav;
