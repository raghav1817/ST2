// import logo from './logo.svg';

import './App.css';
import form from './form';
import Test from './Test';
let name= "Raghav"
//const elemnt= <img src={user.avatarUrl}/>

function App() {
  return (
    <div>
      <h1 className='heading'>This is App component</h1>
      <h2>This is App component</h2>
      <p className='para'>This is App component</p>
      <p className='photo'>Hello {name}   </p>
      <form/>
    </div>
  );
}

export default App;

