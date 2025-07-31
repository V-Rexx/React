import './App.css'
import Chicken from "./Chicken"
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import ShoppingList from './ShoppingList';


const data = [
  {id: 1, item: "eggs", quantity: 12, completed: false},
  {id: 2, item: "chicken breasts", quantity: 1, completed: true},
  {id: 3, item: "milk", quantity: 4, completed: false},
  {id: 4, item: "veggies", quantity: 10, completed: true},
]

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

      {/* <ColorList colors={["red", "green", "blue", "teal"]}/>  */}

      <ShoppingList items={data}/>
     

    </div>
  );
}

export default App
