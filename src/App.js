import './App.css';

import Technologies from './Technologies';
import Raiting from "./Raiting"
import { Accordion } from './Accordion';


const App = () => {
  return (
    <div className='app-wrapper'>
      <PageTitle title="First Title" />
      <Accordion title="Menu" collapsed={true}/>
      <Raiting value={4}/>
      <Accordion title="Log" collapsed={false}/>
      <Raiting value={5}/>
    </div>
  );
}

const PageTitle = (props) => {
  return <h1>{props.title}</h1>
}

export default App;
