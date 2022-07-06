import './index.css'
import { Link } from 'react-router-dom'
import DarkModeHandler from './darkModeHandler'


export default function FooterMenu(){
    return <div className='footer-menu'>
        <div className='dark-mode-toggle'>
            <DarkModeHandler/>
        </div>
        <div className='links'>
            <a href="https://github.com/PlayerG9" target="_blank">Github</a>
            <a href="https://playerg9.github.io/" target="_blank">Website</a>
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
