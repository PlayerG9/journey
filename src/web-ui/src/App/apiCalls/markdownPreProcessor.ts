import { parse } from 'node-html-parser'


export async function preProcessHtmlMarkdown(htmlString: string, journalKey: string) {
    const root = parse(htmlString)

    console.log("processing...")

    const images = root.querySelectorAll("img")
    for(let image of images){
        const imageSrc = image.getAttribute('src')

        if(!imageSrc || imageSrc.startsWith('http')) continue

        const newSrc = `https://raw.githubusercontent.com/PlayerG9/journey/main/journal/${journalKey}/${imageSrc}`
        image.setAttribute('src', newSrc)
        const imageParent = image.parentNode
        if(imageParent && imageParent.rawTagName === 'a' && imageParent.getAttribute('href') === imageSrc){
            imageParent.setAttribute('href', newSrc)
        }
    }

    const codeblocks = root.querySelectorAll("div.highlight")
    for(let codeblock of codeblocks){
        const el = parse("<sub>Copy Button coming soon</sub>")
        codeblock.appendChild(el)
    }

    return root.toString()
}
