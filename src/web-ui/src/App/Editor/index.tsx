import './index.scss'
import { useState, useEffect } from 'react'
import MarkdownRenderer from './markdownRenderer'


const STORAGEKEY = 'editor-markdown-content'


export default function Editor(){
    const loadedText = localStorage.getItem(STORAGEKEY)
    const [textInput, setTextInput] = useState(loadedText ?? "")
    const [renderText, setRenderText] = useState("")

    function updateText(event: any){
        const newText = event.target.value
        localStorage.setItem(STORAGEKEY, newText)
        setTextInput(newText)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(textInput !== renderText){
                setRenderText(textInput)
            }
        }, 10000)  // 10s

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    })

    return <div className='editor'>
        <div className='input-panel'>
            <textarea value={textInput} onChange={updateText}/>
        </div>
        <div className='output-panel'>
            <MarkdownRenderer markdownText={renderText}/>
        </div>
    </div>
}
