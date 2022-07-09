import './index.scss'
import { Link } from 'react-router-dom'
import headerIcon from './header-icon.png'


export default function HeaderMenu(){
    return <div className='header-menu'>
        <Link className='icon' to="/">
            <img src={headerIcon} alt="icon"/>
            <p>PlayerG9/Journal</p>
        </Link>
    </div>
}
