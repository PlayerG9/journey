interface viewerProps {
    html: string | undefined
}


export default function MarkdownViewer(props: viewerProps){
    if(!props.html){
        return null
    }

    return <div className="markdown-container">
        <div className="markdown-body" dangerouslySetInnerHTML={{__html: props.html}} />
    </div>
}
