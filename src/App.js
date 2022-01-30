import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DetailsInfo from './Components/DetailsInfo/DetailsInfo';
import { createContext, useState } from 'react';
import Projects from './Components/Projects/Projects';
import NotFound from './Components/NotFound/NotFound';

export const UserContext=createContext();


function App() {
    const [cart, setCart] = useState({});

  return (
    <UserContext.Provider value={{cart, setCart}}>
      <div className="App">

     <BrowserRouter>
     <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home></Home>
         </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/detailsInfo">
          <DetailsInfo></DetailsInfo>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
    </div>

    </UserContext.Provider>

    
  );
}

export default App;
