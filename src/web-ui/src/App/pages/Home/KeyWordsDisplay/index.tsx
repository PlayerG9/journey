import './index.scss'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { loadJournalMetadataList } from '../../../apiCalls'


export default function KeyWordsDisplay(){
    const apiCall = useQuery(['journals-metalist'], loadJournalMetadataList)

    const keywords = (apiCall.data ?? [])
        .map((item) => item.metadata.keywords)  // extract the keyword-list
        .flat()  // make a 1d list
        .sort((a, b) => {
            a = a.toLowerCase()
            b = b.toLowerCase()
            if(a < b) return -1
            if(a > b) return 1
            return 0
        })

    const keywordItems = Array.from(new Set(keywords))
        .map((keyword) =>
            <Link key={keyword} to={`/keyword/${keyword}`} className="secondary-bg">
                {keyword}
            </Link>
        )


    return <div className='keywords-display'>
        <h2 id="keywords">Topics:</h2>
        <div className='item-list'>
            {keywordItems}
        </div>
    </div>
}
