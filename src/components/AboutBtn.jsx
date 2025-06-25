function AboutBtn({ className, text, icon, href, download }) {
    return (
        <div className={className}>
            <a className='aboutBtn_container'
            href={href}
            download={download}
            target={download ? "_self" : "_blank"}
            rel="noopener noreferrer">
                <img src={icon} alt="아이콘 이미지" />
                {text}
            </a>
        </div>
    );
}

export default AboutBtn;
