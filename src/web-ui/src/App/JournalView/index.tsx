import './index.css'
import { useParams } from 'react-router-dom'


export default function JournalView(){
    const params = useParams()
    const journalKey =  params.journalKey
    return <>
        <h1>Some Journal</h1>
        <p>{journalKey}</p>
    </>
}
