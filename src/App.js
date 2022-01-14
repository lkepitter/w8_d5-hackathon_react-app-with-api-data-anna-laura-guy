import logo from './logo.svg';
import './App.css';
import Display from "./Components/Display/index"
import Search from "./Components/Search/index"
import {useState} from "react"

function App() {
  const [search, setSearch] = useState("")
  function handleClick(input){
    setSearch(input)
    console.log("searched", input)
  }
  return (
    <div className="App">
      <Display search={search}></Display>
      <Search handleClick = {handleClick}></Search>
    </div>
  );
}

export default App;
