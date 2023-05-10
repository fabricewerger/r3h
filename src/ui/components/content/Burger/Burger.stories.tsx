import type { Meta, StoryObj } from '@storybook/react'

import Experience from './Experience'

const experience: Meta<typeof Experience> = {
  title: 'Components/Content/Experience',
  component: Experience,
  argTypes: {},
}

export default experience
type Story = StoryObj<typeof Experience>

export const Primary: Story = {
  args: {},
  render: () => (
    <div className='p-4'>
      <Experience />
    </div>
  ),
}
