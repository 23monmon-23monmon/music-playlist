import React,{useState} from "react";
import logo from '../logo/logo.jpg';
import { Image } from "react-bootstrap";
import { CaretDownOutlined, HomeOutlined,LineChartOutlined, PlusCircleOutlined  } from "@ant-design/icons";
import './LeftPanel.css';
import music from '../logo/music.png';
import playlist from '../logo/playlist.png';
import { MusicNoteList,PersonLinesFill, ToggleOff } from "react-bootstrap-icons";

const LeftPanel = () => {

    const [show,setShow] = useState("");

    const onDropdownChange = () => {
        show === "" ? setShow("show") : setShow("")
    }

    return(
        console.log("Show ", show),
        <React.Fragment>
            <div className="pt-3 px-3">
               <div className="row" style={{display : 'flex', justifyContent : 'space-between'}}>
                    <div className="col-xs-6 col-sm6 col-md-6 col-lg-6" style={{display : 'flex', justifyContent : 'space-between'}}>
                        <div  style={{background :'red' , borderRadius: '50%' , marginRight: '1px', paddingRight: '15px', marginTop: '6px', height: '15px'}}>  </div>
                        <div  style={{background :'orange' , borderRadius: '50%' , marginRight: '1px', paddingRight: '15px', marginTop: '6px', height: '15px'}}>  </div>
                        <div  style={{background :'green' , borderRadius: '50%' , marginRight: '1px', paddingRight: '15px', marginTop: '6px', height: '15px'}}>  </div>
                    </div>
                    <div className="col-xs-6 col-sm6 col-md-6 col-lg-6">
                        
                    </div>
                    
               </div>

               <div className="pt-3" style={{display : 'flex'}}>
                    <span>
                        <Image src = {logo} alt = 'logo'  style={{borderRadius : '50px', width : '60px', height: '50px'}} />
                    </span>
                    
                    <span className="px-2 pt-3" onClick={onDropdownChange}>
                        <label>Joshua</label><CaretDownOutlined />
                        <div style={{color : 'gray', fontSize : '10px', padding : 0}}>PREMIUM</div>
                    </span>
               </div>
               <div className="idropdown-container">
                    <div className={`px-2 dropdown-menu-1 dropdown-menu-right dpkr shadow-card-light idropdown ${show}`} style={{ borderRadius: 8, fontSize: 10, minWidth: 130, maxWidth: 130 }}>
                        <div >
                            <span style={{color : '#e13a80', fontSize : '10px', padding : 0, border : '1px solid #e13a80', paddingRight : '2px', marginRight : '2px'}}>PREMIUM</span>
                            <span style={{color : 'gray', fontSize : '10px', padding : 0}}>Through</span>
                            
                        </div>
                        <div className="pt-2">
                            <span style={{paddingRight : '51px'}}>Private</span> <ToggleOff style={{fontSize : '20px'}} />
                        </div>
                        <div className="pt-2">
                            <span style={{paddingRight : '51px'}}>Expilcit</span> <ToggleOff style={{fontSize : '20px'}} />
                        </div>
                        <div className="pt-2">
                            <span style={{paddingRight : '18px'}}>Friend Activity</span> <ToggleOff style={{fontSize : '20px'}} />
                        </div>
                        <div className="pt-2">
                            <span style={{paddingRight : '11px'}}>Account Setting</span> <ToggleOff style={{fontSize : '20px'}} />
                        </div>
                    </div>
                </div>

                <div className="pt-2" >
                    <div style={{display : 'flex', justifyContent : 'start',color : 'gray', fontSize : '14px'}}>BROWSE</div>
                    <div className="pt-3" style={{display : 'flex', justifyContent : 'start',color : 'gray', fontSize : '14px'}}>
                        <span style={{paddingRight : '5px', fontWeight : 'bold'}}> <HomeOutlined /> </span> <span  style={{paddingLeft : '10px', fontWeight : 'bold'}}>Home</span>
                    </div>
                    <div className="pt-3">
                        <Image src = {music} alt = 'logo'  style={{borderRadius : '50px', width : '30px', height: '30px'}} />  <span  >Songs</span>
                    </div>
                    <div className="pt-3">
                        <MusicNoteList /> <span style={{paddingLeft : '10px'}}>Playlists</span> 
                        {/* <Image src = {music} alt = 'logo'  style={{borderRadius : '50px', width : '50px', height: '40px'}} /> */}
                    </div>
                    <div className="pt-3">
                        <PersonLinesFill /> <span style={{paddingLeft : '10px'}}>Just For You</span>
                    </div>
                    <div className="pt-3">
                        <LineChartOutlined /> <span style={{paddingLeft : '10px'}}>Top Charts</span>
                    </div>
                </div>

                <div className="pt-4">
                    <div>
                        <span style={{paddingRight : '10px'}}>YOUR PLAYLIST </span> <PlusCircleOutlined />
                    </div>
                    <div>
                        <Image src = {playlist} alt = 'logo'  style={{borderRadius : '50px', width : '30px', height: '30px'}} />  <span style={{paddingLeft : '10px'}} >Workout Mix</span>
                    </div>
                    <div>
                        <Image src = {playlist} alt = 'logo'  style={{borderRadius : '50px', width : '30px', height: '30px'}} />  <span style={{paddingLeft : '10px'}} >Chillin` at Home</span>
                    </div>
                    <div>
                        <Image src = {playlist} alt = 'logo'  style={{borderRadius : '50px', width : '30px', height: '30px'}} />  <span style={{paddingLeft : '10px'}} >Booping at Adobe</span>
                    </div>
                    <div>
                        <Image src = {playlist} alt = 'logo'  style={{borderRadius : '50px', width : '30px', height: '30px'}} />  <span style={{paddingLeft : '10px'}} >XD 4 Life</span>
                    </div>
                </div>
               

            </div>

        </React.Fragment>
    )
}

export default LeftPanel;