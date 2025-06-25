import BlackDot1 from "./object/BlackDot1"

function DetailTitle({text}) {
    return (
        <div className='detail_text'>
            <h2>{text}</h2>
            <BlackDot1/>
        </div>
    )
}

export default DetailTitle