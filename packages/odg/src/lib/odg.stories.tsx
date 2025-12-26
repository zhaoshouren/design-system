import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrgOdg } from './odg';
import { expect } from 'storybook/test';

const meta = {
  component: OrgOdg,
  title: 'OrgOdg',
} satisfies Meta<typeof OrgOdg>;
export default meta;

type Story = StoryObj<typeof OrgOdg>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/OrgOdg/gi)).toBeTruthy();
  },
} satisfies Story;
