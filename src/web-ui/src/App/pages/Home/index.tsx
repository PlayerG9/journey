import './index.scss'
import JournalsDisplay from './JournalsDisplay'
import KeyWordsDisplay from './KeyWordsDisplay'


export default function Homepage(){
    return <div className='homepage content-page'>
        <h1>Hello Journal</h1>
        <JournalsDisplay/>
        <KeyWordsDisplay/>
    </div>
}
