import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import './styles/public.scss';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
