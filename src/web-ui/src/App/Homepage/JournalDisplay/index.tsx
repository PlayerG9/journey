import './index.css'
import { useQuery } from 'react-query'
import { listGithubJournals, loadGithubJournalMetadata } from '../../apiCalls'
import { Link } from 'react-router-dom'


export default function JournalDisplay(){
    const apiCall = useQuery(['journal-list'], listGithubJournals)

    const journalItems = (apiCall.data ?? [])
        .filter((item: apiItem) => item.type === 'dir')
        .map((item: apiItem) =>
            <Link to={`/read/${item.name}`}>
                <JournalItemDisplay journalKey={item.name}/>
            </Link>
        )

    return <div className='journal-display'>
        <h2 id="journal">Journals:</h2>
        <div className='box-list'>
            {journalItems}
        </div>
    </div>
}


function JournalItemDisplay(props: {journalKey: string}){
    const result = useQuery(['', props.journalKey], () => loadGithubJournalMetadata(props.journalKey))

    const data = result.data

    return <div className='box-list-item'>
        <h3>
            {data?.title ?? props.journalKey}
        </h3>
        <div>
            {data?.keywords?.map((word: string) =>
                <Link to={`/keyword/${word}`}>
                    {word}
                </Link>
            )}
        </div>
    </div>
}


interface apiItem {
    name: string,
    type: 'dir' | 'file'
}
