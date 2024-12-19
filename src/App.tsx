import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const courses = ['Front End','Back End','Ui & Ux']

function App() {
  const selectedcoueseidx = 1;

  return <ul>
    {courses.map((courseitem ,idx)=> (
      return <li>{idx}.{courseitem}</li>
    ))
    </ul>
  //return <ul>
   // {courses.map(function(courseitem ,idx){
     // return <li>{idx}.{courseitem}</li>
    //})}
  //</ul>
 // return (
 //   <ul>
   //   <li className={selectedcoueseidx === 0 ? 'active' : ''}>
     //   Front End
      //</li>
      //<li className={selectedcoueseidx === 1 ? 'active' : ''}>Back End</li>
      //<li className={selectedcoueseidx === 2 ? 'active' : ''}>Ui & Ux</li>
    //</ul>
  //);
}

export default App;
