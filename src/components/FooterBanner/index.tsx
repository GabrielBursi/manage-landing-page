import React from 'react'
import * as S from './styles'
import { Button, Container } from '..'

export const FooterBanner = () => {
    return (
        <S.FooterBanner>
            <Container>
				<S.Text>
					Simplify how your team works today.
				</S.Text>
				<Button color='white'/>
			</Container>
        </S.FooterBanner>
    )
}
