import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './views/CartView';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import ShippingView from './views/ShippingView';
import PaymentView from './views/PaymentView';
import PlaceOrderView from './views/PlaceOrderView';
import OrderView from './views/OrderView';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderView} />
          <Route path='/placeorder' component={PlaceOrderView} />
          <Route path='/payment' component={PaymentView} />
          <Route path='/shipping' component={ShippingView} />
          <Route path='/login' component={LoginView} />
          <Route path='/register' component={RegisterView} />
          <Route path='/profile' component={ProfileView} />
          <Route path='/product/:id' component={ProductView} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeView} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
