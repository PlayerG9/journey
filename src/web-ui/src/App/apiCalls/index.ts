import { marked } from "marked"
import { HttpError } from "../generell"
import { preProcessHtmlMarkdown } from "./markdownPreProcessor"


export async function loadGithubJournalContent(key: string) {
    const url = `https://raw.githubusercontent.com/PlayerG9/journey/main/journal/${key}/README.md`
    const response = await fetch(url)
    if(!response.ok){
        throw new HttpError(response.status, url)
    }
    const markdown = await response.text()
    const html = await convertMarkdownToHtml(markdown)
    const betterHtml = await preProcessHtmlMarkdown(html, key)
    return betterHtml
}


interface journalMetadata {
    title: string,
    keywords: string[]
}


export async function loadGithubJournalMetadata(key: string) {
    const url = `https://raw.githubusercontent.com/PlayerG9/journey/main/journal/${key}/metadata.json`
    const response = await fetch(url)
    if(!response.ok){
        throw new HttpError(response.status, url)
    }
    const data = await response.json()
    return data
}


interface githubContentObject {
    name: string,
    path: string,
    type: 'dir' | 'file'
}


export async function listGithubDirectory(path: string) {
    const url = `https://api.github.com/repos/PlayerG9/Journey/contents/${path}`
    const response = await fetch(url)
    if(!response.ok){
        throw new HttpError(response.status, url)
    }
    const data: githubContentObject[] = await response.json()
    return data
}


export async function listGithubJournals(){
    return await listGithubDirectory('journal')
}


interface journalMetadataListObject {
    file: githubContentObject,
    metadata: journalMetadata
}


export async function loadJournalMetadataList(){
    const metalist: journalMetadataListObject[] = []
    
    const directories = await listGithubDirectory('journal')

    async function metaLoad(dir: githubContentObject){
        const meta = await loadGithubJournalMetadata(dir.name)
        metalist.push({
            file: dir,
            metadata: meta
        })
    }

    const promises = []
    for(let directory of directories){
        if(directory.type !== 'dir'){
            continue
        }
        promises.push(metaLoad(directory))
    }
    await Promise.all(promises)

    return metalist
}


export async function convertMarkdownToHtml(markdown: string) {
    const url = `https://api.github.com/markdown`
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            accept: 'application/vnd.github+json'
        },
        body: JSON.stringify({
            text: markdown
        })
    })
    if(response.ok){
        return await response.text()
    } else if(response.status === 403){  // 403 - Forbidden
        // after to many requests to `url` github responses with 403-Forbidden
        // marked is used as backup-plan. note: it doesn't support the languages-highlighting
        return marked(markdown)
    }
    else {
        throw new HttpError(response.status, url)
    }
}
