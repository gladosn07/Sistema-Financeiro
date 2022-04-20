import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { items } from "./service/items";
import { categories } from './service/category';
import { Item } from './types/Item'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import TableArea from './components/TableArea/index';
import InfoArea from "./components/InfoArea";
import InputArea from "./components/InputArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [currentMonth, list]);

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    return setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>
          Seu Controle Financeiro
        </C.HeaderTitle>
      </C.Header>

      <C.Body>

        <InfoArea
          expense={expense}
          income={income}
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth} />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;
