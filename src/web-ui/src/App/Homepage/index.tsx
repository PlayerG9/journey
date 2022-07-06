import './index.css'
import { Link } from 'react-router-dom'


export default function Homepage(){
    return <div className='homepage h-centered'>
        <h1>Hello Journal</h1>
        <Link to="/read/react-router-with-gh-pages">Read something</Link>
    </div>
}
