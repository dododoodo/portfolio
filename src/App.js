import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';
import Layout from './components/Layout';
import './styles/public.scss';


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
