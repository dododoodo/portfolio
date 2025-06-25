
function Brackets2({className, theme}) {
  const src = theme === 'dark'
    ? '/img/main_brackets_2.svg'
    : '/img/project_brackets_2.svg';

  return (
        <div className={className}>
            <img src={src} alt="소괄호 이미지" />
        </div>
  )
}

export default Brackets2