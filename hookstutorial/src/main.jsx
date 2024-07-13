import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// virtual dom--> No need to reload whole page 
// Just see the segments who got changed just
// change that in the main dom
// React fiber--> virtual dom 

// we got to know that we dont have to manipulate UI on the sopt maybe sometimes more than 4-5 calls will come rather than updating all those change maybe we could have waited till the last call.
// and then updated only for the last call ISN't?
// Reconcilliation is nothing but comapring the two trees -- main dom and the virtual dom.
// --> Concept behind the virtual dom