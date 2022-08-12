import './App.css';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DIalogsContainer from "./components/Dialogs/DIalogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.store.getState().sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile store = {props.store.getState.bind(props.store)} dispatch={props.store.dispatch.bind(props.store)}/>}/> {/*// state={props.state.profilePage} dispatch={props.dispatch}*/}
                    <Route path='/dialogs/*' element={<DIalogsContainer store={props.store.getState.bind(props.store)} dispatch={props.store.dispatch.bind(props.store)}/>}/> {/*state={props.state.dialogPage} dispatch ={props.dispatch}*/}
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
