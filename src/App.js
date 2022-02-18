import logo from './logo.svg';
import './App.css';


import Counter, {x,y} from './counter'


function App() {
 
  const handleClickYo = ()=>{
    y()
    console.log('clicked')
  }
  return (
    <div className="App">
     
      <h1 className='m-h'></h1>
 
      <Counter title={'Key Board'}/>
    
    </div>
  );
}

export default App;
