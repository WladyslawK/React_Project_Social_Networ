import './App.css';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.messages} updateNewMessageText={props.updateNewMessageText} sendNewMessage={props.sendeNewMessage}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}
export default App;
