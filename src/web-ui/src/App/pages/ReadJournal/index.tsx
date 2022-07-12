import './index.scss'
import { useParams } from 'react-router-dom'
import DisplayJournalView from './DisplayJournalView'


export default function ReadJournalPage(){
    const params = useParams()
    const journalKey =  params.journalKey

    return <div className='content-page'>
        {journalKey && <DisplayJournalView journalKey={journalKey}/>}
    </div>
}
