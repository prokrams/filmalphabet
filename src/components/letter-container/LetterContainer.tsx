import './Lettercontainer.css'
import { Letters } from '../letter-item/LetterItem'
import type { Dispatch, SetStateAction } from 'react'
import type { coverTYPE, languageTYPE, screenTYPE, valueTYPE } from '../../types/types'

export default function LetterConstainer({ 
    values, 
    setValues, 
    activeId, 
    activeLang, 
    covers, 
    setCovers, 
    onNavigate 
}: {
    values: valueTYPE
    setValues: Dispatch<SetStateAction<valueTYPE>>
    activeId: Dispatch<SetStateAction<string | null>>
    activeLang: languageTYPE
    covers: coverTYPE
    setCovers: Dispatch<SetStateAction<coverTYPE>>
    onNavigate: (screen: screenTYPE) => void
}) {
    return (
        <div 
            className='abc-container' 
            style={{alignItems: 'start'}}
        >
            <Letters 
                values={values} 
                setValue={setValues} 
                activeId={activeId} 
                activeLang={activeLang} 
                covers={covers} 
                setCovers={setCovers} 
                onNavigate={onNavigate}
            />
        </div>
    )
}