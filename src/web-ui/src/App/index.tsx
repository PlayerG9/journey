import './index.css'
import './components/index.css'
// import 'github-markdown-css/github-markdown.css'
import 'github-markdown-css/github-markdown-light.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import JourneyRouter from './journeyrouter'


const queryClient = new QueryClient()


export default function App() {
    return <QueryClientProvider client={queryClient}>
        <JourneyRouter />
    </QueryClientProvider>
}
