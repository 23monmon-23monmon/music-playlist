import React, { useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";

const Recommand = () => {

    const recommandlist = [
        {
            songname : 'Best of blue',
            artist : 'Jazzmastor'
        },
        {
            songname : 'Out of this world',
            artist : 'Lily Wondors'
        },
        {
            songname : 'Acoustics',
            artist : 'Tho Spacaman'
        }
]

    return(
        <div className="px-5 row d-flex justify-content-between"  style={{display : 'flex', justifyContent : 'space-between'}}
                
            >
            {
                recommandlist?.map((list,index) => (
                    <RecommandDetails 
                    songname = {list.songname}
                    artist = {list.artist}
                    index={index}
                    />
                ))
            }

        </div>
    )
}

const RecommandDetails = (props) => {

    const {songname,artist,index} = props;
    const [isHover,setIshover] = useState(false)
    
    return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"  key={index} 
                onMouseEnter={() => setIshover(true)}
                onMouseLeave={() => setIshover(false)}>
                    <div  style={{background : isHover ? 'gray' : '#d9d9d9', width : '120px', height : '120px', paddingRight : '10px', marginRight : '6px', borderRadius : '10px', display : 'flex', justifyContent : 'center', alignItems : 'center'}} >{isHover ? <PlayCircleOutlined style={{color : 'white', fontSize : '25px'}} /> : ''}</div> 
                    <span>{songname}</span>
                    <span>{artist}</span>
            </div>
        
        
    )
}

export default Recommand;