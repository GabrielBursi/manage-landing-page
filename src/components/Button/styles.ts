import { styled, css } from "styled-components";
import { darken, lighten } from 'polished'
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
    ${({ theme, color }) => css`
		background-color: ${color === 'primary' ? theme.colors.primary : theme.colors.primaryBg};
		border-radius: ${theme.border.radius.big};
		text-transform: capitalize;
		padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
		color: ${color === 'primary' ? theme.colors.primaryBg : theme.colors.primary};
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		font-family: ${theme.font.family};
		border: none;
		outline: none;
		font-size: ${theme.font.sizes.medium};
		font-weight: ${theme.font.bold};
		transition: .4s;

		&:active {
			transform: scale(0.95);
		}

		&:hover {
			background-color: ${color === 'primary' ? darken(0.1, theme.colors.primary) : theme.colors.primary};
			color: ${color === 'white' && theme.colors.primaryBg};
		}
    `}
`
