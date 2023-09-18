import GameCard from '../GameCard/GameCard'
import Game from '../types/Game'

export function GameList({ games }: { games: Game[] }){
    return (
        <>
            {games.map(game => <GameCard game={game} />)}
        </>
    )
}