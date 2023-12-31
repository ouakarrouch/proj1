import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {  Container } from './components/index';
import { Footer, Header} from './sections/index';
import { Home, Profile, Detail } from './Pages/index';
function App() {
  return (
    <>
    <Router>
    <Header />
    <Container>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/Profile' element={<Profile />}/>
       <Route path='/Detail' element={<Detail />}/>
    </Routes>
    </Container>
    <Footer />
    </Router>
   
    </>
  );
}

export default App;
//text="new header" color="red"