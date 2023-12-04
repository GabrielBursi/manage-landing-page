import type { Meta, StoryObj } from '@storybook/react';
import { FooterBanner } from ".";

const meta: Meta<typeof FooterBanner> ={
    title: 'FooterBanner',
    component: FooterBanner,
	parameters: {
		layout: 'fullscreen',
	}
}
export default meta

type Story = StoryObj<typeof FooterBanner>;

export const Basic: Story = {
    args: {

    }
}

export const Mobile: Story = {
	args: {

	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1"
		}
	}
}
