import React, { useState } from 'react'
import { Item } from '../../types/Item'
import * as  C from './styles'

type Props = {
    onAdd: (item: Item) => void
}

const InputArea: React.FC<Props> = ({ onAdd }) => {
    const [date, setDate] = useState('')
    const [value, setValue] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [category, serCategory] = useState<string>('')
    const handleAddEvent = () => {
        if (date !== '' && value !== 0 && title !== '' && category !== '') {
            let newItem: Item = {
                date: new Date(date),
                category: category,
                title: title,
                value: value
            }
            onAdd(newItem)
            setTitle('')
        }
        if (date === '') return alert('Data não pode ser vazia')
        if (value === 0) return alert('Valor não pode ser vazia')
        if (title === '') return alert('Titulo não pode ser vazia')
        if (category === '') return alert('Categoria não pode ser vazia')
    }


    return (
        <C.Container>
            <C.AddItem onClick={handleAddEvent}>Adicionar</C.AddItem>
            <C.Date type="date" onChange={e => setDate(e.target.value)} />
            <C.Select onChange={e => serCategory(e.target.value)}>
                <option selected >Categoria</option>
                <option value="salary">Salario</option>
                <option value="food">Alimentação</option>
                <option value="rent">Aluguel</option>
            </C.Select>

            <C.Input
                type='number'
                placeholder='Digite o valor'
                onChange={e => setValue(parseInt(e.target.value))} />

            <C.Input
                value={title}
                type='text'
                placeholder='Digite o titulo'
                onChange={e => setTitle(e.target.value)} />
        </C.Container>
    )
}

export default InputArea