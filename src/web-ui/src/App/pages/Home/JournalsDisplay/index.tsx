import './index.scss'
import { useQuery } from 'react-query'
import { loadJournalMetadataList } from '../../../apiCalls'
import { Link } from 'react-router-dom'


export default function JournalsDisplay(){
    const apiCall = useQuery(['journals-metalist'], loadJournalMetadataList)

    const journalItems = (apiCall.data ?? [])
        .map((item) =>
            <Link key={item.file.name} to={`/read/${item.file.name}`} className='box-list-item secondary-bg'>
                <h3>
                    {item.metadata.title}
                </h3>
                <div>
                    {item.metadata.keywords.map((word) =>
                        <Link key={word} to={`/keyword/${word}`}>
                            {word}
                        </Link>
                    )}
                </div>
            </Link>
        )

    return <div className='journal-display'>
        <h2 id="journal">Journals:</h2>
        <div className='box-list'>
            {journalItems}
        </div>
    </div>
}
