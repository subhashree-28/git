import Accordion from "./components/Accordion/Accordion";
import Dropdown from "./components/Dropdown/Dropdown";
import Counter from "./components/Counter/Counter";
import Checklist from "./components/MultipleSelection/MultipleSection";

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

const options = ["chappathi", "Poori", "Briyani"];

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

function App() {
  return (
    <div>
      {data.map((obj) => (
        <Accordion data={obj} />
      ))}
      <br />

      <Dropdown options={options} />
      <br />

      <Counter />
      <br />

      <Checklist items={items} />
    </div>
  );
}

export default App;

