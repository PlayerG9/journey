import { ReactChild } from "react"

interface externalLinkProps {
    dest: string,
    children: ReactChild
}


export default function ExternalLink(props: externalLinkProps){
    return <a href={props.dest} target="_blank" rel="noreferrer">
        {props.children}
    </a>
}
