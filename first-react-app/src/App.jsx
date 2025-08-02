import './App.css'
import Chicken from "./Chicken"
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import ShoppingList from './ShoppingList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';

const data = [
  {id: 1, item: "eggs", quantity: 12, completed: false},
  {id: 2, item: "chicken breasts", quantity: 1, completed: true},
  {id: 3, item: "milk", quantity: 4, completed: false},
  {id: 4, item: "veggies", quantity: 10, completed: true},
]

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors}/>
      {/* <Toggler /> */}
      {/* <Toggler /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Clicker message="HI!!!" buttonText="Please Click Me"/> */}
      {/* <Clicker message="Please Stop Clicking Me!" buttonText="do not click"/> */}
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

      {/* <ShoppingList items={data}/> */}
     

    </div>
  );
}

export default App
