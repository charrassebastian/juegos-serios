import './App.css'
import { GameList } from './GameList/GameList';
import { games } from './exampleGames'

/**
 * TANSTACK CONNECTION TO THE BACKEND FROM THE FRONTEND
 */
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
        <QueryClientProvider client={queryClient}>
      <GameList />
      </QueryClientProvider>

  )
}

export default App