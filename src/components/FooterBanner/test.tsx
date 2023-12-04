import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { FooterBanner } from '.'

describe('<FooterBanner/>', () => {
    it('should render', () => {
        render(<FooterBanner/>)

		expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
		expect(screen.getByRole('heading', { name: /Simplify how your team works today./i })).toBeInTheDocument()
    })
})
