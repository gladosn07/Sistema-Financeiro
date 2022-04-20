import React from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

import TableItem from '../TableItem'

type Props = {
    list: Item[]
}
const TableArea: React.FC<Props> = ({ list }) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>

            <tbody>
                {list?.map((item, index) => (
                    <TableItem item={item} key={index} />
                ))}
            </tbody>
        </C.Table>
    )
}

export default TableArea