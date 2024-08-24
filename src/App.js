import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import RightPanel from './components/RightPanel';
import LeftPanel from './components/LeftPanel';
import FooterPlay from './components/FooterPlay';
import { artistdetails,albumdetails,singlealbum,trackdetail,discography } from './network/api';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [aritstList, setArtistList] = useState([]);
  const [album,setAlbum] = useState([]);
  const [singlealbum,setSingleAlbum] = useState([]);
  const [trackDetails,setTrackDetails] = useState([]);
  const [discographys,setDiscographys] = useState([]);
  
  useEffect(() => {
    fetchAritstList();
    fertchAlbumdetails();
    
  },[])

  const fetchAritstList = async() => {
   await axios.get(artistdetails).then(aritst => setArtistList(aritst?.data?.artists))
  }

  const fertchAlbumdetails = async() => {
    await axios.get(albumdetails).then(album => setAlbum(album?.data?.album));
  }



  return (
    console.log("aritstList ", aritstList),
    <div className="App" style={{height : '100vh', background : 'linear-gradient(160deg, #f64f59, #c471ed, #12c2e9)'}}>

      <div className='row' style={{padding : 0, height : '80vh',background : '#dee2e6',}} >
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <LeftPanel />
        </div>
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          
          <RightPanel />
        </div>

      </div>
      <div>
        <FooterPlay />
      </div>
    </div>
  );
}

export default App;
