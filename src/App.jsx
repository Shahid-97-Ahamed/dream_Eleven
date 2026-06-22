import { Suspense } from 'react'
import './App.css'
import Banner from './component/navbar/banner/banner'
import Navbar from './component/navbar/navbar'
import PlayerCard from './component/navbar/card/playerCard'
const playerfetch =async ()=>{
const res =await fetch("/public/data/data.json")
return res.json()

}
function App() {
  const playerPromis = playerfetch()
  return (
    <>
      <Navbar/>
      <Banner/>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <PlayerCard playerPromis={playerPromis}/>
      </Suspense>   
    </>
  )
}

export default App
