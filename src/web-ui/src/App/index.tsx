import './index.scss'
import './project-css-files/color-modes.scss'
import './project-css-files/markdown-colors.scss'
import './components/index.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import HeaderMenu from './menus/HeaderMenu'
import FooterMenu from './menus/FooterMenu'
import JourneyRouter from './journeyrouter'


const queryClient = new QueryClient()


export default function App() {
    return <QueryClientProvider client={queryClient}>
        <HeaderMenu/>
        <JourneyRouter />
        <FooterMenu/>
    </QueryClientProvider>
}
