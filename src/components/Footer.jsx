
function Footer() {
    return (
        <footer>
            <img className="footer_img" src="/img/compo_footer_1.svg"/>

            <div className="footer_container">
                
                <div className="footer_content">
                    <div className="footer_left">
                        <p>김도연의 포트폴리오</p>
                        <p>© 2025 Doyeon Kim</p>
                    </div>
                    <div className="footer_right">
                        <p>Thanks for visiting !</p>
                        <div className="footer_links">
                            <a href="https://github.com/dododoodo" target="_blank" rel="noopener noreferrer">
                            <img src="/img/main_linkArrow_10.svg" alt="GitHub 아이콘" />
                                Github
                            </a>
                            <a href="https://www.notion.so/21c8138b09308075b2d4e3768aeca342" target="_blank" rel="noopener noreferrer">
                            <img src="/img/main_linkArrow_10.svg" alt="Notion 아이콘" />
                                Notion
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;
