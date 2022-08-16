import { HttpError } from "../generell"
import { renderMarkdownString } from "./markdownRenderer"


export async function loadGithubJournalContent(key: string) {
    const url = `https://raw.githubusercontent.com/PlayerG9/journey/main/journal/${key}/README.md`
    const response = await fetch(url)
    if(!response.ok){
        throw new HttpError(response.status, url)
    }
    const markdown = await response.text()
    const html = renderMarkdownString(markdown, key)
    return html
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
