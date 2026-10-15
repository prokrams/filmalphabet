import logo from '../../assets/logo.svg'
import './Header.css'
import type { languageTYPE } from '../../types/types'
import BadgeLanguage from '../../utils/lang-switch/badge-language'

export default function Header({ 
    activeLang, 
    setActiveLang, 
    activePage
}: {
    activeLang: languageTYPE
    setActiveLang: (language: languageTYPE) => void
    activePage: string
}) {
    return (
         <div className='header'>
            <img src={logo} width="200px"/>
            {activePage === 'letters' && 
                <BadgeLanguage 
                    activeLang={activeLang} 
                    setActiveLang={setActiveLang}
                />
            }
        </div>
    )
}