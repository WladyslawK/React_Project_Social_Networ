import './App.css';

import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Header } from './components/Header';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

const PageTitle = (props) => {
  return <h1>{props.title}</h1>
}

export default App;
