import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import Layout from './Components/Layout';
import Home from './pages/HomePage/Home';
import Calc from './pages/CalcPage/Calc';
import Meditation from './pages/MeditationPage/Meditation';
import Tasks from './pages/TasksPage/Tasks';

function App() {
  return (
    <>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path='/meditation' element={ <Meditation /> } />
        <Route path='/tasks' element={ <Tasks /> } />
        <Route path='/calculator' element={ <Calc /> } />
      </Route>
    </Routes>
    </>
  )
}

export default App;
