import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to ProShop</h1>
          <Route path='/' component={HomeView} exact />
          <Route path='/product/:id' component={ProductView} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
