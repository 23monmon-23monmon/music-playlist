import React,{useState} from "react";
import { HeartOutlined, DashOutlined } from "@ant-design/icons";
import { PlayCircleOutlined } from "@ant-design/icons";

const RecantPlay = () => {

    

    const songlist = [
        {
            songName : 'All That Jazz',
            album : 'Various Artist',
            time : '13:30'
        },
        {
            songName : 'Splashed',
            album : 'Blue-Eyed D',
            time : '05:12'
        },
        {
            songName : 'Prism',
            album : 'GusBos',
            time : '03:22'
        },
        {
            songName : 'Mind-blowing Beats  ',
            album : 'Various',
            time : '09:10'
        }
    ]

    return (
        <>
            {
                songlist?.map((song,index) => (
                    <RecentPlayDetail 
                        songName={song.songName}
                        album={song.album}
                        time={song.time}
                        index={index}
                        />
                ))
            }
        </>
    )
}

const RecentPlayDetail = (props) => {

    const [ishover,setIshover] = useState(false);
    const {songName,album,time,index} = props;

    return(
        <div key={index} className="row pt-2" style={{display : 'flex', justifyContent : 'space-between', background : ishover ? 'gray' : ''}} 
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
        >
        
            <div style={{display : 'flex', justifyContent : 'space-arround'}} className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <div  style={{background : 'gray', width : '50px', height : '40px', paddingRight : '10px', marginRight : '6px'}}> {ishover ? <PlayCircleOutlined style={{color : 'white', fontSize : '25px'}} /> : ''} </div>
                {songName}
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                {album}
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                {time}
            </div>
            <div className="col-xs-2 col-sm-1 col-md-1 col-lg-1">
                <HeartOutlined />
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <DashOutlined />
            </div>
        </div>
    )

}

export default RecantPlay;