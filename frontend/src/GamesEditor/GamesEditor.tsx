import Game from '../types/Game'
import GameEditor from '../GameEditor/GameEditor'
import {
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios'
import { baseUrl } from '../constants/url'

export function GamesEditor(){

    const getGames = () => axios.get(baseUrl + 'games').then(res => res.data);

    // Use React Query's useQuery to make the GET request
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['games'], queryFn: getGames });

    // If isLoading is true, display a loading message
    if (isLoading) return <p>Cargando...</p>;

    // If isError is true, display an error message
    if (isError && error instanceof Error) return <p>Error: {error.message}</p>;

    // If data.games contains games, display them using GameCard components
    if (data?.games?.length) {
    return data.games.map((game: Game) => (
        <GameEditor game={game} key={game.name} />
    ));
    } else {
    return <p>No se ha encontrado ningún juego.</p>;
    }
}
