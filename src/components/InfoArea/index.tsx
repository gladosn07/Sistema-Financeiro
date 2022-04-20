import React from 'react'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import * as C from './styles'
import ResumeItem from '../ResumeItem';

type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    expense: number
    income: number
}

const InfoArea: React.FC<Props> = ({ currentMonth, onMonthChange, expense, income }) => {

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let curretDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        curretDate.setMonth(curretDate.getMonth() + 1)
        onMonthChange(`${curretDate.getFullYear()}-${curretDate.getMonth() + 1}`)
    }

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let curretDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        curretDate.setMonth(curretDate.getMonth() - 1)
        onMonthChange(`${curretDate.getFullYear()}-${curretDate.getMonth() + 1}`)
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income} />
                <ResumeItem title='Despesas' value={expense} />
                <ResumeItem
                    color={(income - expense) < 0 ? 'red' : 'green'}
                    title='Balanço'
                    value={income - expense} />
            </C.ResumeArea>
        </C.Container>
    )
}

export default InfoArea;
