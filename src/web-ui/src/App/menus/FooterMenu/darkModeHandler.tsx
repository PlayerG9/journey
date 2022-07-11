import { useState } from "react"


const LIGHTICON = "☀"
const DARKICON = "☾"
const LIGHTTAG = "light-mode"
const DARKTAG = "dark-mode"


const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches


export default function DarkModeHandler(){
    const stored = localStorage.getItem('is-dark-mode')
    const [isDark, setDark] = useState(JSON.parse(stored ?? `${prefersDarkMode}`))
    localStorage.setItem('is-dark-mode', JSON.stringify(isDark))

    const body = document.body
    if(isDark){
        body.classList.remove(LIGHTTAG)
        body.classList.add(DARKTAG)
    }else{
        body.classList.add(LIGHTTAG)
        body.classList.remove(DARKTAG)
    }

    return <>
        <button className="dark-mode-button" onClick={() => setDark(!isDark)}>
            {isDark ? DARKICON : LIGHTICON}
        </button>
    </>
}
