import { styled, css } from "styled-components";
import media from "styled-media-query";
import { darken } from "polished";
import { Container } from "..";

export const Footer = styled.footer`
    ${({ theme }) => css`
		background-color: ${theme.colors.footerBg};
		padding: ${theme.spacings.small} 0;

		${Container} {
			display: grid;
			grid-template-columns: repeat(4, 1fr);

			${media.lessThan('medium')`
				display: flex;
				flex-direction: column;
				gap: ${theme.spacings.medium};
				justify-content: center;
				align-items: center;
			`}
		}
    `}
`
export const Column = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: ${theme.spacings.xxsmall};

		${media.lessThan('medium')`
			align-items: center;
		`}
	`}
`

export const Link = styled.a`
	${({ theme }) => css`
		text-decoration: none;
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.primaryBg};
		text-transform: capitalize;
		font-family: ${theme.font.family};
		transition: .4s;
		width: fit-content;

		&:hover {
			color: ${theme.colors.primary};
		}
	`}
`

export const SocialMediaContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.xxsmall};
		align-items: center;
	`}
`

export const Copy = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${darken(0.1, theme.colors.secondaryText)};
		text-transform: capitalize;
		font-family: ${theme.font.family};
	`}
`
export const InputContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		gap: ${theme.spacings.xsmall};

		${media.lessThan('medium')`
			flex-direction: column;
		`}
	`}
`

export const Input = styled.input`
	${({ theme }) => css`
		border-radius: ${theme.border.radius.big};
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.secondaryText};
		background-color: ${theme.colors.primaryBg};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		outline: none;
		border: none;

		&::placeholder {
			color: ${theme.colors.secondaryText};
		}
	`}
`

export const Button = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.primary};
		color: ${theme.colors.primaryBg};
		outline: none;
		border: none;
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		height: 100%;
		border-radius: ${theme.border.radius.big};
	`}
`
