import './Lettercontainer.css'
import { Letters } from '../letter-item/LetterItem'
import type { coverTYPE, valueTYPE } from '../../app/App'
import type { Dispatch, SetStateAction } from 'react'

export default function LetterContainer({ 
    values, 
    setValues, 
    activeId, 
    activeLang, 
    covers, 
    setCovers, 
    handleChangePage 
}: {
    values: valueTYPE
    setValues: Dispatch<SetStateAction<valueTYPE>>
    activeId: Dispatch<SetStateAction<string | null>>
    activeLang: number
    covers: coverTYPE
    setCovers: Dispatch<SetStateAction<coverTYPE>>
    handleChangePage: (newPage: string) => void
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
                handleChangePage={handleChangePage}
            />
        </div>
    )
}