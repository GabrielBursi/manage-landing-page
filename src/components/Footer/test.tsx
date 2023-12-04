import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { Footer } from '.'

describe('<Footer/>', () => {
    it('should render', () => {
        render(<Footer/>)

		expect(screen.getByRole('textbox')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /go/i })).toBeInTheDocument()
		expect(screen.getByLabelText('logo da empresa')).toBeInTheDocument()
		expect(screen.getByText('All Rights Reserved', { exact: false })).toBeInTheDocument()

		const linksTexts = ['about us', 'home', 'pricing', 'careers', 'community', 'privacy policy', 'products'];

		linksTexts.forEach((linkText) => {
			const linkElement = screen.getByText(linkText);
			expect(linkElement).toBeInTheDocument();
		});

		const linksIcons = ['facebook', 'youtube', 'twitter', 'pinterest', 'instagram'];

		linksIcons.forEach((iconLabel) => {
			const linkElement = screen.getByLabelText(iconLabel);
			expect(linkElement).toBeInTheDocument();
		});
    })
})
