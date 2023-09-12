import './App.css'
import GameCard from './GameCard/GameCard';
import { game } from './exampleGame'

function App() {
  return (
    <>
      <GameCard game={game} />
    </>
  )
}

export default App
