import Navbar from './Components/navbar/Navbar'
import './App.css';
import Accueils from './Components/accueil/Accueils';
import  Hearders from './Components/header/Hearders'
import { Drawer } from 'antd';
import { useState } from 'react';
import {MenuOutlined} from "@ant-design/icons";

function App() {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className="App">
       <Hearders />
      <div style={{backgroundColor:'#ff0390',height:60,paddingTop:12}} className='menuIcon'>
        <MenuOutlined  style={{color:"white", fontSize:30}} onClick={()=>{setOpenMenu(true)}}/>
      </div>
     
      <span className='headerMenu'>
      <Navbar />
      </span>
      <Drawer placement='left' open={openMenu}
      onClose={()=>{
        setOpenMenu(false);
      }}
       closable={false} >
      <Navbar isInline/>
      </Drawer>
      <Accueils />
    </div>
  );
}

export default App;
