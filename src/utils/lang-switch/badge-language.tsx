import type { languageTYPE } from '../../types/types'
import './badge-language.css'

export default function BadgeLanguage({ 
    activeLang, 
    setActiveLang 
}: {
    activeLang: languageTYPE
    setActiveLang: (language: languageTYPE) => void
}) {
    return(
        <div className='lang-container'>
            <div 
                onClick={() => setActiveLang('ru')} 
                className={`lang-item ${activeLang === 'ru' ? 'active-lang-item' : ''}`}>
                РУС
            </div>
            <div 
                onClick={() => setActiveLang('en')}
                className={`lang-item ${activeLang === 'en' ? 'active-lang-item' : ''}`}>
                ENG
            </div>
        </div>
    )
}