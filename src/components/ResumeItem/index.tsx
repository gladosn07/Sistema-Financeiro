import React from 'react'
import * as C from './styles'

type Props = {
    value: number
    title: string
    color?: string
}

const ResumeItem: React.FC<Props> = ({ value, title, color }) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>

            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container>
    )
}

export default ResumeItem