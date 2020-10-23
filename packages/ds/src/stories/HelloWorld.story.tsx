import React from 'react'

import { HelloWorld } from '../components'

export default {
  title: 'HelloWorld',
  component: HelloWorld,
}

export const ToStorybook = () => <HelloWorld />

ToStorybook.story = {
  name: 'HelloWorld',
}
