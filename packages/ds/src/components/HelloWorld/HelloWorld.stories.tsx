import React from 'react'

import HelloWorldComponent from './HelloWorld.component'

export default {
  title: 'Welcome',
  component: HelloWorldComponent,
}

export const ToStorybook = () => <HelloWorldComponent />

ToStorybook.story = {
  name: 'to Storybook',
}
