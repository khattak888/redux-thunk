import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {userAction} from './redux/actions/userAction';
import User from './components/User';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector(state=> state.userList)
  const {loading , users , error} = userList
  useEffect(()=>{
    dispatch(userAction())

  },[dispatch])
  return (
    <div className="App">
      <h1>Redux Thunk:-</h1>
      {
        loading ? <h2>Loading...</h2>: error ? <h2>{error}</h2>:
        <User users={users}/>
      }
    </div>
  );
}

export default App;
