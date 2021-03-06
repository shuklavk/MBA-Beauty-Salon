import React from 'react';
import WebsiteHeader from './HomePage/WebsiteHeader';
import HomePage from './HomePage/HomePage';
import ThreadingPage from './Services/ThreadingPage';
import WaxingPage from './Services/WaxingPage';
import FacialPage from './Services/FacialPage';
import HairPage from './Services/HairPage';
import HennaPage from './Services/HennaPage';
import MicrobladingPage from './Services/MicrobladingPage';
import NailsPage from './Services/NailsPage';
import BleachPage from './Services/BleachPage';
import EyelashesPage from './Services/EyelashesPage';
import MakeupPage from './Services/MakeupPage';
import HairCarePage from './Services/HairCarePage';
import ContactPage from './HomePage/Contact';
import ServiceNavBar from './Services/ServiceNavBar';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <WebsiteHeader />
      <HashRouter>
        <div>
          <Switch>
            <Route path="/threading">
              <ThreadingPage />
            </Route>
            <Route path="/waxing">
              <WaxingPage />
            </Route>
            <Route path="/facial">
              <FacialPage />
            </Route>
            <Route path="/hair">
              <HairPage />
            </Route>
            <Route path="/henna">
              <HennaPage />
            </Route>
            <Route path="/microblading">
              <MicrobladingPage />
            </Route>
            <Route path="/makeup">
              <MakeupPage />
            </Route>
            <Route path="/eyelashes">
              <EyelashesPage />
            </Route>
            <Route path="/contact">
              <ServiceNavBar />
              <hr />
              <ContactPage />
            </Route>
            <Route path="/nails">
              <NailsPage />
            </Route>
            <Route path="/bleach">
              <BleachPage />
            </Route>
            <Route path="/hairstyle">
              <HairCarePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
