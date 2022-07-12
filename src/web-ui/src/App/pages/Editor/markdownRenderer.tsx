import { marked } from 'marked' 
import MarkdownHtmlViewer from '../../components/markdownHtmlViewer'


interface rendererProps {
    markdownText: string
}


export default function MarkdownRenderer(props: rendererProps){
    const html = marked(props.markdownText)
    return <MarkdownHtmlViewer html={html}/>
}
