import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrgUi } from './ui';
import { expect } from 'storybook/test';

const meta = {
  component: OrgUi,
  title: 'OrgUi',
} satisfies Meta<typeof OrgUi>;
export default meta;

type Story = StoryObj<typeof OrgUi>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/OrgUi/gi)).toBeTruthy();
  },
} satisfies Story;
