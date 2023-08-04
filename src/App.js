import './App.css';
import { useEffect, useState } from 'react';
import { getAPI } from './api';

function App() {
  // const [audio, setAudio] = useState()

  // useEffect(() => {
  //   getAPI().then((results) => {
  //     setAudio(results[0].tracks[0].audio)
  //   })
  // },[])

  useEffect(() => {
    getAPI()
  })
  

  return (
    <>
      <audio src='' controls></audio>
    </>
  );
}

export default App;
