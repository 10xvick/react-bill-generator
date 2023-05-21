import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="container">
        <div className='time'> 
        {time().toString() }
        </div>
        <div className='ammount-1'> ₹349 </div>
        <div className='ammount-2'> ₹349 </div>
        <div className='message'>{ `JIO20BR0008KAKFZM${randomdigits(8)}T172301E0360` }</div>
        <div className='transaction-id'> T{randomdigits(23)} </div>
        <div className='UTR'> UTR: {randomdigits(12)} </div>
        <img width='500' src="https://cdn.jsdelivr.net/gh/10xvick/react-bill-generator@main/IMG-20230520-WA0006.jpg" alt="" className="x"/>
      </div>
    </div>
  );
}

function randomdigits(n){
  return Array(n).fill(0).map(e=>Math.random().toString()[2]).join('');
}

function time(){
  //05:34 pm on 18 Nov 2023 
  const currentDate = new Date();
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  const currentTime = currentDate.toLocaleTimeString('en-IN', options).toLowerCase();

  const options_d = { day: '2-digit', month: 'short', year: 'numeric' };
  const currentDateString = currentDate.toLocaleDateString('en-IN', options_d).replaceAll('-',' ');
  
  return currentTime + ' on ' + currentDateString;
}
