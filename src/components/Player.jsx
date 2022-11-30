import React, { useState } from 'react';
import {episodeNumber} from '../App'

function Player({video, setVideo, choose, setChoose}) {

  const [full, setFull] = useState(true);


  return (
    <div className='player'>
      <div className='videoPlayer'>
        <h1>Hady's Player</h1>
        {video.filter((vid) => vid.episode_no === choose).map((fil) => (
        <div key={fil.episode_no}>
        <iframe className={full ? `iframePlayer`: `iframePlayerFull`} src={fil.episode_url} sandbox='allow-scripts' />
        <h3>{fil.show_title}{fil.season}{fil.episode_no}</h3>
        </div>
        ))
        }
        <button onClick={() => setFull(false)}>*</button>
      </div>
      <div className='selectors'>
        <button className='button' onClick={() => setChoose('1')}>Episode one</button>
        <button className='button' onClick={() => setChoose('2')}>Episode two</button>
        <button className='button' onClick={() => setChoose('3')}>Episode three</button>
        <button className='button' onClick={() => setChoose('4')}>Episode four</button>
        <button className='button' onClick={() => setChoose('5')}>Episode five</button>
      </div>    
    </div>
  )
}
// {video.map((vid) => (
//   <div key={vid.episode_no}>
//   <h3>{vid.show_title}{vid.season}{vid.episode_no}</h3>
//   <iframe className='iframePlayer'src={vid.episode_url} sandbox='allow-scripts' />
//   </div>
// ))}

export default Player
