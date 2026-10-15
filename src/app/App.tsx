import { useState } from 'react'
import './app.css'

import Header from '../ui/header/header'
import LetterContainer from '../components/letter-container/LetterContainer'
import SearchContainer from '../components/search-container/SearchContainer'
import Footer from '../ui/footer/footer'
import type { coverTYPE, languageTYPE, screenTYPE, valueTYPE } from '../types/types'


export default function App() {

    // активная страница
    const [activeScreen, setActiveScreen] = useState<screenTYPE>('letters')
    const onNavigate = (screen: screenTYPE) => {
        setActiveScreen(screen)
    }

    // активный id, значение для букв и url обложки
    const [activeId, setActiveId] = useState<string | null>(null)
    const [values, setValues] = useState<valueTYPE>({})
    const [covers, setCovers] = useState<coverTYPE>({})

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
                activeLang={activeLanguage} 
                setActiveLang={onSwitchLanguage} 
                activePage={activeScreen}
            />
            {
                activeScreen === 'letters' && (
                <LetterContainer 
                    values={values} 
                    setValues={setValues} 
                    activeId={setActiveId} 
                    activeLang={activeLanguage} 
                    covers={covers} 
                    setCovers={setCovers} 
                    onNavigate={onNavigate}
                />)
            }
            {
                activeScreen === 'search' && (
                <SearchContainer 
                    letterId={activeId} 
                    handleSelectFilm={handleSelectFilm} 
                    activeLang={activeLanguage} 
                    handleTakeCovers={handleTakeCovers} 
                    onNavigate={onNavigate}
                />)
            }
            <Footer/>
        </div>
    )
}