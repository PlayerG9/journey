import './index.css'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loader from '../components/loader'
import ErrorMessage from '../components/errormessage'
import { loadGithubJournalContent } from '../apiCalls/apiCalls'
import MarkdownHtmlViewer from '../components/markdownHtmlViewer'


export default function JournalView(){
    const params = useParams()
    const journalKey =  params.journalKey

    const apiCall = useQuery(['journal', journalKey], () => loadGithubJournalContent(journalKey))

    if(apiCall.isLoading){
        return <Loader/>
    }
    if(apiCall.isError){
        return <ErrorMessage error={apiCall.error}/>
    }

    return <>
        <MarkdownHtmlViewer html={apiCall.data} />
    </>
}
