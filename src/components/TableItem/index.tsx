import React from 'react'
import { formatedDate } from '../../helpers/dateFilter'
import { Item } from '../../types/Item'
import * as C from './styles'
import { categories } from '../../service/category'

type Props = {
    item: Item
    key: number
}

const TebleItem: React.FC<Props> = ({ item, key }) => {

    return (
        <C.TableLine key={key}>
            <C.TableColumn>{formatedDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn >
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>

        </C.TableLine>
    )
}

export default TebleItem