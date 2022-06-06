import logo from './logo.svg';
import './App.css';
import CrudProveedor from './Components/CrudProveedor';
import HeaderComp from './Components/HeaderComp';

function App() {
  return (
    <div className='container'>
     <HeaderComp/>
     <CrudProveedor/>

    </div>
  );
}

export default App;
