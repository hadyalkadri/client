import {React, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Player from './components/Player';


function App() {

  const [video, setVideo] = useState([]);
  const [choose, setChoose] = useState('1')

  useEffect(() => {
    fetchAPI();
  }, [])



  const fetchAPI = () => {
    // const api = '/express_backend'
    const api = 'files/episodes.json'
    fetch(api)
      .then((response) => {
        return response.json() ;
      })
      .then((API) => {
        console.log(API)
        setVideo(API)
      })
  }




  return (
    <div>
      {/* <ReactPlayer controls='false' url='https://afsha952022.kobatube.online/hls3/TKYb7B0m8suvJH9Eus5deQ/1669764905/[CimaClub.Com]-the.conjuring.2013-[720p].mkv-720.56402.mp4/index.m3u8' /> */}
      <Player video={video} setVideo={setVideo} choose={choose} setChoose={setChoose}/>
  
    </div>
  )
}



export default App