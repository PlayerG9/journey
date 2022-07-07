import { convertMarkdownToHtml } from '../apiCalls'
import MarkdownHtmlViewer from '../components/markdownHtmlViewer'
import { useEffect, useState } from 'react'


interface rendererProps {
    markdownText: string
}


export default function MarkdownRenderer(props: rendererProps){
    const [html, setHtml] = useState("")

    useEffect(() => {
        convertMarkdownToHtml(props.markdownText)
            .then((value: string) => setHtml(value))
    })

    return <MarkdownHtmlViewer html={html}/>
}
