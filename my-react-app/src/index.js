import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
const myFirstElement = <h1>Hello React!</h1>

function MyApp(){
    return(
        <div>
            <h1>
            What apa nu kite hor function bana di zaroorat nahi?
            </h1>
        </div>
    )
}

// myApp----> (parse)---> const reactElement

// but wont work even if we render reactElement

// but still it won't come beacuse it expects something else, as in different file we wrote render function ourselves.

const anotherElement=(
    <a href='https://google.com' target='_blank'>Visit google</a>
    // now this workes beacuse the person who made this wanted this syntax only so that he can parse it by itself
)

// React object (parsing wala)

const anotherreactElement= React.createElement(
    'a',
    {href:'https://google.com',taget:'_blank'},
    'click me to visited google by making react object ourseleves'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// as js dom react makes her dom also called React Dom
// so that the manipulation can be donr here and then at once in js dom.



