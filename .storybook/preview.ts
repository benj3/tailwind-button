// .storybook/preview.js
import { Preview } from '@storybook/react'

import '../src/styles/main.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'grey',
          value: '#B5B5B5',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
  },
}

export default preview
