import GameCard from '../GameCard/GameCard'
import Game from '../types/Game'
import {
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8080/api/'

export function GameList(){
    const getGames = () => axios.get(baseUrl + 'games').then(res => res.data)
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['games'], queryFn: getGames })
    if(data?.games) return data.games.map((game: Game) => <GameCard game={game} key={game.name}/>)
    else return <p>Cargando...</p>
    
}