import { useQuery } from 'react-query'
import Loader from '../../components/loader'
import ErrorMessage from '../../components/errormessage'
import { loadGithubJournalContent } from '../../apiCalls'
import MarkdownHtmlViewer from '../../components/markdownHtmlViewer'


export default function DisplayJournalView(props: {journalKey: string}){
    const journalKey = props.journalKey

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
