import { useEffect, useState } from 'react'
import './app.css'

import Header from '../shared/header/header'
import LetterContainer from './alphabet/letters-container/letters-container'
import SearchContainer from './search/search-container/search-container'
import type { coverTYPE, languageTYPE, screenTYPE, valueTYPE } from '../types/types'
import Footer from '../shared/footer/footer'


export default function App() {

    function readStorage<T>(key: string, fallback: T): T {
        try {
            const raw = localStorage.getItem(key)
            return raw ? (JSON.parse(raw) as T) : fallback
        } catch {
            return fallback
        }
    }
    
    // активная страница
    const [activeScreen, setActiveScreen] = useState<screenTYPE>('letters')
    const onNavigate = (screen: screenTYPE) => {
        setActiveScreen(screen)
    }
    
    // активный id, значение для букв и url обложки
    const [activeId, setActiveId] = useState<string | null>(null)
    const [values, setValues] = useState<valueTYPE>(() => readStorage('values', {}))
    const [covers, setCovers] = useState<coverTYPE>(() => readStorage('covers', {}))
    
    useEffect(() => {
        localStorage.setItem('covers', JSON.stringify(covers))
        localStorage.setItem('values', JSON.stringify(values))
    })

    const onClearLetter = (id: string) => {
        setValues(prev => ({ 
            ...prev, 
            [id]: '' })
        ) 
        setCovers(prev => ({ 
            ...prev, 
            [id]: '' })
        )
    }

    const onChangeValue = (id: string, value: string) => {
        setValues(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const onChangeActiveId = (id: string) => {
        setActiveId(id)
    }

    
    const handleTakeCovers = (cover: string) => {
        if (activeId) {
            setCovers(prev => ({
                ...prev,
                [activeId]: cover
            }))
        }
    }

    const handleSelectFilm = (filmName: string, filmYear: string) => {
        if (activeId) {
            setValues(prev => ({
                ...prev,
                [activeId]: `${filmName}, ${filmYear}`
            }))
        }
    }

    // активный язык
    const [activeLanguage, setActiveLanguage] = useState<languageTYPE>('ru')
    const onSwitchLanguage = (language: languageTYPE) => {
        setActiveLanguage(language)
    }

    return (
        <div className='wrapper'>
            <Header 
                onSwitchLanguage={onSwitchLanguage}

                activeLanguage={activeLanguage} 
                activeScreen={activeScreen}
            />
            {
                activeScreen === 'letters' && (
                <LetterContainer 
                    onChageActiveId={onChangeActiveId} 
                    onChangeValue={onChangeValue} 
                    onNavigate={onNavigate}
                    onClearLetter={onClearLetter}

                    values={values} 
                    activeLang={activeLanguage} 
                    covers={covers}
                />)
            }
            {
                activeScreen === 'search' && (
                <SearchContainer 
                    handleSelectFilm={handleSelectFilm} 
                    handleTakeCovers={handleTakeCovers} 
                    onNavigate={onNavigate}
                    
                    letterId={activeId} 
                    activeLang={activeLanguage} 
                />)
            }
            <Footer/>
        </div>
    )
}
