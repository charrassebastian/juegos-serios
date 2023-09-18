import GameCard from '../GameCard/GameCard'
import Game from '../types/Game'
import {
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8080/api/'

export function GameList(){

    /**
     * POSTGAME: we get the games from the backend and send they to the frontend to show them 
     */



    /**
     * GETALLGAMES: Fetch games from the backend and display them on the frontend
     */

    // Define the getGames function that makes a GET request to the backend
    const getGames = () => axios.get(baseUrl + 'games').then(res => res.data);

    // Use React Query's useQuery to make the GET request
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['games'], queryFn: getGames });

    // If isLoading is true, display a loading message
    if (isLoading) return <p>Cargando...</p>;

    // If isError is true, display an error message
    if (isError) return <p>Error: {error.message}</p>;

    // If data.games contains games, display them using GameCard components
    if (data?.games?.length) {
    return data.games.map((game: Game) => (
        <GameCard game={game} key={game.name} />
    ));
    } else {
    return <p>No se ha encontrado ningún juego.</p>;
    }
}
