import React from 'react'
import { ButtonProps } from './types'
import * as S from './styles'

export const Button = ({ color='primary' }: ButtonProps) => {
    return (
        <S.Button color={color}>
            get started
        </S.Button>
    )
}
