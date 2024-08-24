import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const FooterPlay = () => {

    return(
        <React.Fragment>

            <div className="row px-5">
                <div className="row px-2 col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <div className="row px-2 col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{width : '60px', height : '60px', background : 'gray', borderRadius : '50%'}}></div>
                    
                        <div className="rowcol-xs-7 col-sm-7 col-md-7 col-lg-7" style={{display : 'flex', justifyContent : 'center',  color : 'white'}}>
                            <span style={{fontWeight : 'bold'}}>Mind-Blowing</span><br/>
                            <span style={{fontSize : '12px'}}>Various Artist</span>   
                        </div> 
                        
                    
                    <div className="row px-3 col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <PlusCircleOutlined style={{color : 'white'}} />
                    </div>  

                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <AudioPlayer
                        autoPlay={true}
                        src="http://example.com/audio.mp3"
                        onPlay={e => console.log("onPlay")}
                        // other props here
                    />
                </div>
            </div>


        </React.Fragment>
    )
}

export default FooterPlay;