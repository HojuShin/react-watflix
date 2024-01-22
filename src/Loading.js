import loading from './assets/loadingImg.gif'

export default function Loading() {
    return (
        <div className='loadingSecion' style={{ background: '#000000', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ letterSpacing: '1px' }}>Loading...</p>
            <img src={loading} alt='loading'></img>
        </div>
    )
}