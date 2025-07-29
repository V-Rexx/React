import './App.css'
import Chicken from "./Chicken"
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';

function App() {
  return (
    <div>
      {/* <Greeter person="Bill" from="colt" />
      <Greeter person="Ted" />
      <Greeter from="elton" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}

      <ListPicker values={[1, 2, 3]}/>
      <ListPicker values={["a", "b", "c"]}/>
      {/* <ListPicker values={{a: 1, b: 2}}/> */}

    </div>
  );
}

export default App
