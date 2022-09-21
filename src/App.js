import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import List from './Components/List';
import Favourites from './Components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    {/* <Navbar/>
    <Banner/>
    <List/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
<>
<Banner/>
          <List />
          </>
          }/>
          <Route path="/fav" element={<Favourites />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
