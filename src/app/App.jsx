import { useState } from 'react'
import './App.css'

import Header from '../components/header/Header'
import LetterContainer from '../components/letter-container/LetterContainer'
import SearchContainer from '../components/search-container/SearchContainer'
import Footer from '../components/footer/Footer'

export default function App() {

    // активная страница
    const [activePage, setActivePage] = useState('letters')

    const changePage = (newPage) => {
        setActivePage(newPage)
    }

    // активный id, значение для букв и url обложки
    const [activeId, setActiveId] = useState(null)
    const [values, setValues] = useState({})
    const [covers, setCovers] = useState({})

    const handleTakeCovers = (cover) => {
        setCovers(prev => ({
            ...prev,
            [activeId]: cover
        }))
    }

    const handleSelectFilm = (filmName, filmYear) => {
        setValues(prev => ({
            ...prev,
            [activeId]: `${filmName}, ${filmYear}`
        }))
    }

    // активный язык
    const [activeLang, setActiveLang] = useState(0)

    return (
        <div className='wrapper'>
            <Header activeLang={activeLang} setActiveLang={setActiveLang} activePage={activePage}/>
            {
                activePage === 'letters' && (<LetterContainer values={values} setValues={setValues} activeId={setActiveId} activeLang={activeLang} covers={covers} setCovers={setCovers} handleChangePage={changePage}/>)
            }
            {
                activePage === 'search' && (<SearchContainer letterId={activeId} handleSelectFilm={handleSelectFilm} activeLang={activeLang} handleTakeCovers={handleTakeCovers} handleChangePage={changePage}/>)
            }
            <Footer/>
        </div>
    )
}