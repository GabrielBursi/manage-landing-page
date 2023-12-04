import { styled, css } from "styled-components";
import { Container } from "..";
import media from "styled-media-query";

export const FooterBanner = styled.section`
    ${({ theme }) => css`
		background-color: ${theme.colors.primary};
		padding: ${theme.spacings.large} 0;

		${Container} {
			display: flex;
			justify-content: space-between;
			align-items: center;

			${media.lessThan('medium')`
				flex-direction: column;
				gap: ${theme.spacings.xsmall}
			`}
		}
    `}
`

export const Text = styled.h2`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xxlarge};
		color: ${theme.colors.primaryBg};
		font-weight: ${theme.font.bold};
		font-family: ${theme.font.family};

		${media.lessThan('medium')`
			font-size: ${theme.font.sizes.xlarge};
			text-align: center;
		`}
	`}
`
