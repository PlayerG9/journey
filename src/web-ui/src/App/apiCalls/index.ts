import { HttpError } from "../generell"


export async function loadGithubJournalContent(key: String | undefined) {
    const url = `https://raw.githubusercontent.com/PlayerG9/journey/main/journal/${key}/README.md`
    const response = await fetch(url)
    if(!response.ok){
        throw new HttpError(response.status)
    }
    const markdown = await response.text()
    const html = await convertMarkdownToHtml(markdown)
    return html
}


export async function loadGithubJournalMetadata(key: String | undefined) {
    const url = `https://raw.githubusercontent.com/PlayerG9/journey/main/journal/${key}/metadata.json`
    const response = await fetch(url)
    if(!response.ok){
        throw new HttpError(response.status)
    }
    const data = await response.json()
    return data
}


export async function listGithubDirectory(path: string) {
    const url = `https://api.github.com/repos/PlayerG9/Journey/contents/${path}`
    const response = await fetch(url)
    if(!response.ok){
        throw new HttpError(response.status)
    }
    const data = await response.json()
    return data
}


export async function listGithubJournals(){
    return await listGithubDirectory('journal')
}


export async function convertMarkdownToHtml(markdown: String) {
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
    if(!response.ok){
        throw new HttpError(response.status)
    }
    const data = await response.text()
    return data
}