import './index.scss'
import { useEffect, useState } from 'react'
import MarkdownRenderer from './markdownRenderer'


const STORAGEKEY = 'editor-markdown-content'


export default function Editor(){
    const loadedText = localStorage.getItem(STORAGEKEY)
    const [textInput, setTextInput] = useState(loadedText ?? "")
    var textarea: HTMLTextAreaElement | null

    useEffect(() => {
        updateTextAreaSize()
    })

    function updateText(event: any){
        const newText = event.target.value
        localStorage.setItem(STORAGEKEY, newText)
        setTextInput(newText)
    }

    function updateTextAreaSize(){
        if(textarea){
            textarea.style.height = ""
            textarea.style.height = `${textarea.scrollHeight + 40}px`
        }
    }

    return <div className='editor'>
        <div className='input-panel'>
            <textarea ref={el => textarea = el} wrap='auto' value={textInput} onInput={updateTextAreaSize} onChange={updateText}/>
        </div>
        <div className='output-panel'>
            <MarkdownRenderer markdownText={textInput}/>
        </div>
    </div>
}
