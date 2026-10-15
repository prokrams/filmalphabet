import type { Dispatch, SetStateAction } from 'react'
import './LangSwitch.css'

export default function LangSwitch({ 
    activeLang, 
    setActiveLang 
}: {
    activeLang: number
    setActiveLang: Dispatch<SetStateAction<number>>
}) {
    return(
        <div className='lang-container'>
            <div onClick={() => setActiveLang(0)} className={`lang-item ${activeLang === 0 ? 'active-lang-item' : ''}`}>
                РУС
            </div>
            <div onClick={() => setActiveLang(1)} className={`lang-item ${activeLang === 1 ? 'active-lang-item' : ''}`}>
                ENG
            </div>
        </div>
    )
}