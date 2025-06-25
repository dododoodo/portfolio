
function Brackets1({className, theme = 'dark'}) {
    const src = theme === 'dark'
        ? '/img/main_brackets_1.svg'
        : '/img/project_brackets_1.svg';

    return (
        <div className={className}>
            <img src={src} alt="소괄호 이미지" />
        </div>
    )
}

export default Brackets1