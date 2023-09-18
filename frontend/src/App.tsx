import './App.css'
import { GameList } from './GameList/GameList';
import { games } from './exampleGames'

function App() {
  return (
    <>
      <GameList games={games} />
    </>
  )
}

export default App
