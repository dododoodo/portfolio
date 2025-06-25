import '../styles/public.scss';

function Layout({ children }) {
    return <div className="all_container">
            {children}
        </div>;
}

export default Layout;