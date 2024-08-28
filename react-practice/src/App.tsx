import Accordion from "./components/Accordion/Accordion";
import Checklist from "./components/MultipleSelection/MultipleSection";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";
import Dataset from "./components/Dataset/Dataset";
import Counters from "./components/UserRef Counter/UserRef Counter";
import MyApp from "./components/Theme/Theme";
import Form from "./components/Increment/Increment"

const data = [
  {
    title: "What is a dog?",
    content:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  },

  {
    title: "What kinds of dogs are there?",
    content:
      "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
  },

  {
    title: "How do you acquire a dog?",
    content:
      "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.",
  },
];

const options = [
  {label: "Chappathi", value: "chappathi"},
  {label: "Poori", value: "poori"},
  {label: "Dosa", value: "dosa"},
  {label:"Parotta", value: "parotta"},
  {label: "Chilly", value: "chilly"},
];

const items = [
  {
    id: 0,
    label: "Apple",
    value: "apple",
  },
  {
    id: 1,
    label: "Mango",
    value: "mango",
  },
  {
    id: 2,
    label: "Orange",
    value: "orange",
  },
  {
    id: 3,
    label: "Muskmelon",
    value: "muskmelon",
  },
  {
    id: 4,
    label: "Kiwi",
    value: "kiwi",
  },
];



// const arrayofvalue = [[1,2,3],[4,5,6],[7,8,9]];
// const arrayofvalue = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
// ];

function App() {
  return (
    <div>
      {data.map((obj) => (
        <Accordion data={obj} />
      ))}
      <br />

      <Dropdown options={options} defaultValue="favourite" onSubmit={function (opt: string): void {
        throw new Error("Function not implemented.");
      }}  />
      <br />

      {/* <Counter />
      <br /> */}

      <Checklist items={items} defaultValue={""} />
      <br />
      <br />
      <br />
      {/* <Square arrayofvalue={arrayofvalue}/>
      <Board /> */}
      {/* <Dataset />

      <Counters /> */}

      <MyApp />
      <Form />
    </div>
  );
}

export default App;


