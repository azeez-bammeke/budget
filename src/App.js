import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import React, {useEffect, useState} from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useSelector} from "react-redux";

function App() {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId, setEntryId] = useState()
    const [incomeTotal, setIncomeTotal] = useState(0.00)
    const [expenseTotal, setExpenseTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)

    const entries = useSelector((state) => state.entries)


    useEffect(() => {
        if(!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].isExpense = isExpense
            newEntries[index].value = value
            // setEntries(newEntries)
            resetEntry();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(()=> {
        let totalExpense = 0
        let totalIncome =  0
            entries.map(entry => {
            if(entry.isExpense) {
                return (totalExpense += Number(entry.value))
            }
            return (totalIncome += Number(entry.value))
        })
        let total = totalIncome - totalExpense
        setExpenseTotal(totalExpense)
        setTotal(total)
        setIncomeTotal(totalIncome)

    }, [entries])

    const editEntry = (id) => {
        if(id) {
            const index = entries.findIndex(entry => entry.id === id)
            const entry = entries[index]
            setEntryId(id)
            setDescription(entry.description)
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpen(true)
        }

    }

    const addEntry = () => {
    const result = entries
        .concat({id: entries.length + 1,
            description: description,
            value: value,
            isExpense});
        // setEntries(result);
        resetEntry();
    }

    const resetEntry = () => {
        setValue('')
        setDescription('')
        setIsExpense(true)
    }

    return (
<Container>
    <MainHeader title={'Monthly Budget'} type={"h1"}/>
    <DisplayBalance title={'Your Balance:'} value={total} size={'small'}/>

    <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
    <MainHeader title={'History'} type={"h3"}/>
    <EntryLines
        entries={entries}
        editEntry={editEntry}
    />

    <MainHeader title={'Add new transaction'} type={"h3"}/>
    <NewEntryForm addEntry={addEntry}
                  description={description}
                  value={value}
                  isExpense={isExpense}
                  setValue={setValue}
                  setDescription={setDescription}
                  setIsExpense={setIsExpense}
    />
    <ModalEdit isOpen={isOpen}
               setIsOpen={setIsOpen}
               description={description}
               value={value}
               isExpense={isExpense}
               setValue={setValue}
               setDescription={setDescription}
               setIsExpense={setIsExpense}
    />
</Container>
  );
}

export default App;
