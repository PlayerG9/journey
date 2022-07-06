interface viewerProps {
    html: string | undefined
}


export default function MarkdownViewer(props: viewerProps){
    if(!props.html){
        return null
    }

    return <>
        <div className="markdown-body h-centered" dangerouslySetInnerHTML={{__html: props.html}} />
    </>
}
