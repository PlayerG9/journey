import { useState } from "react"


const LIGHTICON = "☀"
const DARKICON = "☾"
const LIGHTTAG = "light-mode"
const DARKTAG = "dark-mode"


export default function DarkModeHandler(){
    const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('is-dark-mode') ?? "true"))
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
