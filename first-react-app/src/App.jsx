import './App.css'
import Chicken from "./Chicken"
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';

function App() {
  return (
    <div>
      {/* <Greeter person="Bill" from="colt" />
      <Greeter person="Ted" />
      <Greeter from="elton" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}

      {/* <ListPicker values={[1, 2, 3]}/>
      <ListPicker values={["a", "b", "c"]}/> */}
      {/* <ListPicker values={{a: 1, b: 2}}/> */}
      {/* <Heading color="Magenta" text="Welcome" fontSize="48px"/>
      <Heading color="teal" text="Example" fontSize="20px"/>

      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}

      <ColorList colors={["red", "green", "blue", "teal"]}/> 

    </div>
  );
}

export default App
