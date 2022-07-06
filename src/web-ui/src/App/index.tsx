import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import JourneyRouter from './journeyrouter'


const queryClient = new QueryClient()


export default function App() {
    return <QueryClientProvider client={queryClient}>
        <JourneyRouter />
    </QueryClientProvider>
}
