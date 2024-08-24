import React, { useState } from "react";
import { BellFill, Bell } from "react-bootstrap-icons";
import { Input } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import './RightPanel.css';
import RecantPlay from "./RecantPlay";
import Recommand from "./Recommand";
const RightPanel = () => {
    return(
        <React.Fragment>
            <div className="RightPanel pt-3">
                <div className="input" style={{display : 'flex', justifyContent : 'space-between'}}>
                    <Input style={{width : '30%'}} placeholder="Search for songs, artist, albums" />
                    <span className="px-4">
                        {/* <SfNav showNotification={true} notificationIcon={<Bell style={{marginTop : '5px'}} />} /> */}
                        <div className="notification-bell ">
                            <Bell size={30} />
                            
                                <span className="notification-count">3</span>
                            
                        </div>
                    </span>
                </div>

                <div className="pt-2" style={{display : 'flex', justifyContent : 'space-between'}}>
                    <div style={{width : '48%', height : '300px', background : 'linear-gradient(160deg, #f64f59, #c471ed, #12c2e9)', borderRadius : '20px'}} >
                        <div className="pt-2 px-4" style={{fontSize : '50px', color : 'white', fontWeight : 'bold'}}>GET LOST</div>
                        <div className="px-4" style={{fontSize : '20px', color : '#cdacac'}}>in your music</div>
                        <div className="px-4" style={{paddingTop : '150px'}}><PlayCircleOutlined style={{fontSize : '30px', color : 'white'}} /></div>
                    </div>

                    <div className="px-2" style={{width : '48%', height : '300px', background: 'linear-gradient(135deg, #f64f59, #c471ed, #12c2e9)', borderRadius : '20px'}} >
                        <div className="pt-2 px-4" style={{fontSize : '50px', color : 'white', fontWeight : 'bold'}}>MELLOW</div>
                        <div className="px-4" style={{fontSize : '20px', color : '#cdacac'}}>beats</div>
                        <div className="px-4" style={{paddingTop : '150px'}}><PlayCircleOutlined style={{fontSize : '30px', color : 'white'}} /></div>
                    </div>
                </div>

                <div className="pt-3 row" >
                    <div className="col-xs-6 col-sm-6 col-md-6 col-ld-6"><RecantPlay /></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-ld-6 px-3" ><Recommand /></div>
                </div>
            </div>
        </React.Fragment>
    )

    
}

export default RightPanel;