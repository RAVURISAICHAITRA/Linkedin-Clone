import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser , logout, login } from "./features/userSlice"
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import { auth } from './firebase';
import { useDispatch} from 'react-redux'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }else{
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      <Header/>
      {!user ? (<Login/> ):(
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      
      )}
    </div>
  );
}

export default App;
