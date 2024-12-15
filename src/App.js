import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import React, {useEffect, useState} from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useDispatch, useSelector} from "react-redux";
import {getEntriesAction} from "./actions/entries.actions";

function App() {
    const [incomeTotal, setIncomeTotal] = useState(0.00)
    const [expenseTotal, setExpenseTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)

    const [entry, setEntry] = useState({})
    const entries = useSelector((state) => state.entries)
    const {isOpen, id} = useSelector((state) => state.modals)
    const dispatch = useDispatch()


    useEffect(() => {
        const index = entries.findIndex(findEntry => findEntry.id === id)
        setEntry(entries[index])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, id, entries]);

    useEffect(() => {
        let totalExpense = 0
        let totalIncome = 0
        entries?.map(entry => {
            if (entry?.isExpense && entry.value) {
                return (totalExpense += Number(entry?.value))
            }
            return (totalIncome += Number(entry?.value?? 0))
        })
        let total = totalIncome - totalExpense
        setExpenseTotal(totalExpense)
        setTotal(total)
        setIncomeTotal(totalIncome)

    }, [entries])


    useEffect(() => {
        dispatch(getEntriesAction())
    }, []);


    return (
        <Container>
            <MainHeader title={'Monthly Budget'} type={"h1"}/>
            <DisplayBalance title={'Your Balance:'} value={total} size={'small'}/>

            <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
            <MainHeader title={'History'} type={"h3"}/>
            <EntryLines entries={entries}/>

            <MainHeader title={'Add new transaction'} type={"h3"}/>
            <NewEntryForm/>
            <ModalEdit isOpen={isOpen} {...entry}/>
        </Container>
    );
}

export default App;
