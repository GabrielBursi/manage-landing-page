import React from 'react'
import { SocialIcon } from "react-social-icons"

import * as S from './styles'

import { Container, Logo } from '..'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
				<S.Column>
					<Logo/>
					<S.SocialMediaContainer>
						<SocialIcon
							network="facebook"
							bgColor='white'
							style={{
								width: '30px',
								height: '30px',
							}}
						/>
						<SocialIcon
							network="youtube"
							bgColor='white'
							style={{
								width: '30px',
								height: '30px',
							}}
						/>
						<SocialIcon
							network="twitter"
							bgColor='white'
							style={{
								width: '30px',
								height: '30px',
							}}
						/>
						<SocialIcon
							network="pinterest"
							bgColor='white'
							style={{
								width: '30px',
								height: '30px',
							}}
						/>
						<SocialIcon
							network="instagram"
							bgColor='white'
							style={{
								width: '30px',
								height: '30px',
							}}
						/>
					</S.SocialMediaContainer>
				</S.Column>
				<S.Column>
					<S.Link>home</S.Link>
					<S.Link>pricing</S.Link>
					<S.Link>products</S.Link>
					<S.Link>about us</S.Link>
				</S.Column>
				<S.Column>
					<S.Link>careers</S.Link>
					<S.Link>community</S.Link>
					<S.Link>privacy policy</S.Link>
				</S.Column>
				<S.Column>
					<S.InputContainer>
						<S.Input placeholder='Updates in your phone...'/>
						<S.Button>
							Go
						</S.Button>
					</S.InputContainer>
					<S.Copy>
						&copy; 2023. All Rights Reserved
					</S.Copy>
				</S.Column>
			</Container>
        </S.Footer>
    )
}
