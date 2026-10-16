import type { statusTYPE } from '../../../types/types'
import Loading from '../loading/loading'
import './status.css'

export default function Status({
    status,
    error
}: {
    status: statusTYPE
    error?: string
}) {
    return (
        <>
            {status !== 'success' && status !== 'idle' && <div className='status-container'>
                <h2>{status === 'failed' && 'Ошибка!'}</h2>
                {status === 'loading' && <Loading/>}
                {status === 'failed' && <p>{`${error}`}</p>}
            </div>}
        </>
    )
}