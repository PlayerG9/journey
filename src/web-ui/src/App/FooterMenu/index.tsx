import './index.css'
import { Link } from 'react-router-dom'
import ExternalLink from '../components/externalLink'
import DarkModeHandler from './darkModeHandler'


export default function FooterMenu(){
    return <div className='footer-menu'>
        <div className='dark-mode-toggle'>
            <DarkModeHandler/>
        </div>
        <div className='links'>
            <ExternalLink dest='https://github.com/PlayerG9'>Github</ExternalLink>
            <ExternalLink dest='https://playerg9.github.io/'>Website</ExternalLink>
            <Link to="/#blog">Blog</Link>
            <Link to="/#journal">Journal</Link>
            <Link to="/about">About</Link>
        </div> 
        <div className='copyright'>
            <img src="" alt=""/>
            <span>© 2022 PlayerG9</span>
        </div>
    </div>
}
