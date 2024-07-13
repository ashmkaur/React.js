import logo from './logo.svg';
import './App.css';
import News from './new'

function App() {
  const username= 'heheheheeh'
  return (
    // <news/>
    // // wont show anything
    <>
    <News/>
    <h1>Hiiiiii {username}</h1></>
    // {username} is just return expression but we can write any loop or if in it we have to do it the outside of the function

    // beacuse at the end it will be evaluted as the object ewe thori kujj vi ghusa dange apaa object de syntax de vich

    // file name should be capitalized
  );
}

export default App;

//Now in jsx we can return just one element so we wrap it in <></> which is called a fragment 
