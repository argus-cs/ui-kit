import { ThemeProvider } from 'styled-components';
import { StoryContext } from '@storybook/react';
import { Container } from '../src/components/Container';

import './reset.css';

import { themeSchema } from '../src/theme';

/**
 * Add global context for RTL-LTR switching
 */
 export const globalTypes = {
    direction: {
      name: "Direction",
      description: "Direction for layout",
      defaultValue: "LTR",
      toolbar: {
        icon: "globe",
        items: ["LTR", "RTL"],
      },
    },
  }

const withTheme = (StoryFn: Function, context: StoryContext) => {
    return (
        <ThemeProvider theme={themeSchema} >
          <Container centralize margin="2rem auto" >
            <StoryFn />
          </Container>
        </ThemeProvider>
    )
}

export const decorators = [withTheme];
