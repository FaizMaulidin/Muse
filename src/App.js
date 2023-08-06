import { useEffect } from 'react';
import './App.css';
import Navbar from './components/comps/navbar';
import Header from './components/comps/header';
import BestAlbums from './components/Home/bestAlbums';
import Recommended from './components/Home/recommended';
import Suggested from './components/Home/suggested';
import BigNavbar from './components/comps/bigNavbar';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='from-stone-950 to-stone-900 bg-gradient-to-b text-zinc-300'>
      <BigNavbar/>
      <div className='min-h-screen lg:ml-72 flex-grow px-3 pb-24 flex flex-col gap-5 lg:gap-8'>
        <Header name="Muse" />
        <BestAlbums />
        <Recommended title="Recommended For You" divider={10} limit='180' min={-1} ids="&id=1932670+1791799+1885128+1920917+1899772+1852643+1848420+1845306+1885165+1980875+1840696+1852836+1992290+2029053+2040872+2016245+1971516+2027991" />
        <Recommended title="Recently Played" divider={12} limit='132' min={59} ids="&id=1786988+1824031+1912616+1994046+2039626+1973064" />
        <Suggested />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
