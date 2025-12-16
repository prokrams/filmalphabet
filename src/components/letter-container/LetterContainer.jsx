import './Lettercontainer.css'
import { Letters } from '../letter-item/LetterItem'

export default function LetterContainer({ values, setValues, activeId, activeLang, covers, setCovers, handleChangePage }) {
    return (
        <div className='abc-container' style={{alignItems: 'start'}}>
            <Letters values={values} setValue={setValues} activeId={activeId} activeLang={activeLang} covers={covers} setCovers={setCovers} handleChangePage={handleChangePage}/>
        </div>
    )
}