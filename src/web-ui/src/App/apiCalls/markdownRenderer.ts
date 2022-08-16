import { marked } from "marked"
import { highlight, getLanguage } from "highlightjs"
// import 'highlightjs/styles/github-gist.css'
import 'highlightjs/styles/androidstudio.css'


marked.setOptions({
    highlight(code, lang) {
        if(!lang || getLanguage(lang) === undefined){
            return code
            // return highlightAuto(code).value
        }
        return highlight(lang, code).value
    }
})


export function renderMarkdownString(htmlString: string, journalKey: string){
    const baseUrl = `https://raw.githubusercontent.com/PlayerG9/journey/main/journal/${journalKey}/`
    return marked(htmlString, { baseUrl })
}
