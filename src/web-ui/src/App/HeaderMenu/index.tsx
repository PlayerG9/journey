import './index.scss'
import { Link } from 'react-router-dom'


export default function HeaderMenu(){
    return <div className='header-menu'>
        <Link className='icon' to="/">
            <img src="" alt="icon"/>
            <h1>PlayerG9/Journal</h1>
        </Link>
    </div>
}
