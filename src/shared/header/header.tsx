import logo from '../../assets/logo.svg'
import './header.css'
import type { languageTYPE } from '../../types/types'
import BadgeLanguage from './badge-language/badge-language'

export default function Header({ 
    activeLanguage, 
    onSwitchLanguage, 
    activeScreen
}: {
    activeLanguage: languageTYPE
    onSwitchLanguage: (language: languageTYPE) => void
        activeScreen: string
}) {
    return (
         <div className='header'>
            <img src={logo} width="200px"/>
            <div className='menu'>
                {activeScreen === 'letters' && 
                    <>
                        <button>Очистить хранилище</button>
                        <BadgeLanguage 
                            activeLanguage={activeLanguage} 
                            onSwitchLanguage={onSwitchLanguage}
                        />
                    </>
                }
            </div>
        </div>
    )
}