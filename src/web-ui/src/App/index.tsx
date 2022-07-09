import './index.scss'
import './components/index.scss'
// import 'github-markdown-css/github-markdown.css'
import 'github-markdown-css/github-markdown-light.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import HeaderMenu from './HeaderMenu'
import FooterMenu from './FooterMenu'
import JourneyRouter from './journeyrouter'


const queryClient = new QueryClient()


export default function App() {
    return <QueryClientProvider client={queryClient}>
        <HeaderMenu/>
        <JourneyRouter />
        <FooterMenu/>
    </QueryClientProvider>
}
