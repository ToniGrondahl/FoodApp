import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import {
  getAuth
} from "firebase/auth"
import { loginUser } from './pages/login&register/firebase';
import { homeOutline, restaurantOutline, searchOutline, personOutline, } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import HideTabs from './components/HideNavbar'
//Page routes
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Search from './pages/Search';
import Account from './pages/Account';
import Login from './pages/login&register/Login';
import Register from './pages/login&register/Register';
import Settings from './pages/Account/Settings';
import Contact from './pages/Account/Contact';
import About from './pages/Account/About';
import Checkout from './pages/Checkout';
import Jouninkeitto from './pages/Menu/Jouninkeitto';
import Kingsushi from './pages/Menu/Kingsushi';
import FishAndChips from './pages/Menu/Fish&chips';
import Antalanya from './pages/Menu/Antalanya';
import Cafeursus from './pages/Menu/Cafeursus';
import Tartarillas from './pages/Menu/Tartarillas';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
const currentPath = window.location.pathname;
const hideTabsForLogin = currentPath === '/login' || currentPath === '/register' || currentPath === '/' ;

const routes = (
  <>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/restaurants">
            <Restaurants />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/jouninkeitto">
            <Jouninkeitto />
          </Route>
          <Route exact path="/kingsushi">
            <Kingsushi />
          </Route>
          <Route exact path="/fish&chips">
            <FishAndChips />
          </Route>
          <Route exact path="/antalanya">
            <Antalanya />
          </Route>
          <Route exact path="/cafeursus">
            <Cafeursus />
          </Route>
          <Route exact path="/tartarillas">
            <Tartarillas />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/account/settings">
            <Settings />
          </Route>
          <Route exact path="/account/contact">
            <Contact />
          </Route>
          <Route exact path="/account/about">
            <About />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
  </>
)

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {hideTabsForLogin ?(<IonRouterOutlet>
          {routes}
        </IonRouterOutlet>) : (<IonTabs>
        <IonRouterOutlet>
          {routes}
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="restaurants" href="/restaurants">
            <IonIcon aria-hidden="true" icon={restaurantOutline} />
            <IonLabel>Restaurants</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon aria-hidden="true" icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
        
      </IonTabs>)}
      
    </IonReactRouter>
  </IonApp>
);

export default App;

