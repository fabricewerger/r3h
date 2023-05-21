import type { Meta, StoryObj } from '@storybook/react'

import Experience from './Experience'
import { Canvas } from '@react-three/fiber'

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
    <canvas className='p-4'>
      <Canvas>
        <Experience />
      </Canvas>
    </canvas>
  ),
}
