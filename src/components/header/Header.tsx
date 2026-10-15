import LangSwitch from "../lang-switch/LangSwitch";
import logo from '../../assets/logo.svg'
import './Header.css'
import type { Dispatch, SetStateAction } from 'react'

export default function Header({ 
    activeLang, 
    setActiveLang, 
    activePage
}: {
    activeLang: number
    setActiveLang: Dispatch<SetStateAction<number>>
    activePage: string
}) {
    return (
         <div className='header'>
            <img src={logo} width="200px"/>
            {activePage === 'letters' && 
                <LangSwitch 
                    activeLang={activeLang} 
                    setActiveLang={setActiveLang}
                />
            }
        </div>
    )
}