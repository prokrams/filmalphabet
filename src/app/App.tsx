import { useState } from 'react'
import './App.css'

import Header from '../components/header/Header'
import LetterContainer from '../components/letter-container/LetterContainer'
import SearchContainer from '../components/search-container/SearchContainer'
import Footer from '../components/footer/Footer'

export type valueTYPE = Record<string, string>
export type coverTYPE = Record<string, string>

export default function App() {

    // активная страница
    const [activePage, setActivePage] = useState<string>('letters')

    const changePage = (newPage: string) => {
        setActivePage(newPage)
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
    const [activeLang, setActiveLang] = useState<number>(0)

    return (
        <div className='wrapper'>
            <Header 
                activeLang={activeLang} 
                setActiveLang={setActiveLang} 
                activePage={activePage}
            />
            {
                activePage === 'letters' && (
                <LetterContainer 
                    values={values} 
                    setValues={setValues} 
                    activeId={setActiveId} 
                    activeLang={activeLang} 
                    covers={covers} 
                    setCovers={setCovers} 
                    handleChangePage={changePage}
                />)
            }
            {
                activePage === 'search' && (
                <SearchContainer 
                    letterId={activeId} 
                    handleSelectFilm={handleSelectFilm} 
                    activeLang={activeLang} 
                    handleTakeCovers={handleTakeCovers} 
                    handleChangePage={changePage}
                />)
            }
            <Footer/>
        </div>
    )
}