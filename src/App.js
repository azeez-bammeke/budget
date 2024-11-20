import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import {useState} from "react";
import EntryLines from "./components/EntryLines";

function App() {
const [entries, setEntries] = useState(initialEntries)
    const deleteEntry = (id) => {
     const result = entries
         .filter(entry => entry.id !== id)
        setEntries(result);
    }

    const addEntry = ({description, value, isExpense}) => {
        console.log('From actual: ', description, value)
    const result = entries.concat({id: entries.length + 1, description: description, value: value, isExpense});
        setEntries(result);
        console.log(entries)
    }

    return (
<Container>
    <MainHeader title={'Monthly Budget'} type={"h1"}/>
    <DisplayBalance title={'Your Balance:'} value={'2,550.53'} size={'small'}/>

    <DisplayBalances/>
    <MainHeader title={'History'} type={"h3"}/>
    <EntryLines entries={entries} deleteEntry={deleteEntry}/>

    <MainHeader title={'Add new transaction'} type={"h3"}/>
    <NewEntryForm addEntry={addEntry}/>
</Container>
  );
}

export default App;

var initialEntries = [
    {
        id: 1,
        description: "Work Income",
        value : "$111,000",
        isExpense : false
    },
    {
        id: 2,
        description : "Rent",
        value : "$1,000",
        isExpense : true
    },
    {
        id: 3,
        description : "Water bill",
        value : "$10",
        isExpense : true
    },
    {
        id: 4,
        description : "Power bill",
        value : "$15",
        isExpense : true
    }
]
