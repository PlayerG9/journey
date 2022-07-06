import './index.css'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loader from '../components/loader'
import ErrorMessage from '../components/errormessage'
import { loadJournalContent } from './apiCalls'
import MarkdownViewer from './markdownviewer'


export default function JournalView(){
    const params = useParams()
    const journalKey =  params.journalKey

    const apiCall = useQuery(['journal', journalKey], () => loadJournalContent(journalKey))

    if(apiCall.isLoading){
        return <Loader/>
    }
    if(apiCall.isError){
        return <ErrorMessage error={apiCall.error}/>
    }

    return <>
        <MarkdownViewer html={apiCall.data} />
    </>
}
