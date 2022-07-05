interface viewerProps {
    markdown: String
}


export default function MarkdownViewer(props: viewerProps){
    return <>
        {props.markdown}
    </>
}
