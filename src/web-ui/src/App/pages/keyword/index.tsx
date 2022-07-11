import './index.scss'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { loadJournalMetadataList } from '../../apiCalls'
import Loader from '../../components/loader'
import ErrorMessage from '../../components/errormessage'


export default function KeywordPage(){
    const params = useParams()
    if(!params.keyword){
        return null
    }
    const keyword: string = params.keyword

    return <KeywordFilterDisplay keyword={keyword}/>
}


function KeywordFilterDisplay(props: {keyword: string}){
    const apiCall = useQuery(['metadata-list'], loadJournalMetadataList)

    if(apiCall.isLoading){
        return <Loader/>
    }

    if(apiCall.isError){
        return <ErrorMessage error={apiCall.error}/>
    }

    const data = apiCall.data
        ?.filter((metaobject) => metaobject.metadata.keywords.includes(props.keyword))

    if(!data){
        return <p>Nothing found</p>
    }

    const lis = data.map((metaobject) =>
        <li key={metaobject.file.name}>
            <Link to={`/read/${metaobject.file.name}`}>{metaobject.metadata.title}</Link>
        </li>
    )

    return <ul>
        {lis}
    </ul>
}
