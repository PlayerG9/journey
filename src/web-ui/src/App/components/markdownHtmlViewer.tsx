import { useEffect } from "react"

interface viewerProps {
    html: string
}


export default function MarkdownHtmlViewer(props: viewerProps){
    useEffect(() => {
        const hashTag = window.location.hash
        if(!hashTag) return 

        var element
        element = document.querySelector(hashTag)
        if(!element){
            const hashTagV2 = `#user-content-${hashTag.slice(1)}`
            element = document.querySelector(hashTagV2)
        }
        if(element){
            element.scrollIntoView()
        }
    })

    return <div className="markdown-container">
        <div className="markdown-body" dangerouslySetInnerHTML={{__html: props.html}} />
    </div>
}
