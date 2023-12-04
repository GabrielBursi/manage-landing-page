import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { Button } from '.'
import { theme } from '../../styles'

describe('<Button/>', () => {
    it('should render the default button', () => {
        render(<Button/>)

		const button = screen.getByRole('button', { name: /get started/i })
        expect(button).toBeInTheDocument()
		expect(button).toHaveStyleRule('background-color', theme.colors.primary)
    })

	it('should render the white variant button', () => {
		render(<Button color='white'/>)

		const button = screen.getByRole('button', { name: /get started/i })
		expect(button).toHaveStyleRule('background-color', theme.colors.primaryBg)
	})
})
