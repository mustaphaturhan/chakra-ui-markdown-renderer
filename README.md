## Chakra UI Markdown Renderer

 <a href="https://www.npmjs.com/package/chakra-ui-markdown-renderer" alt="NPM">
  <img src="https://img.shields.io/npm/v/chakra-ui-markdown-renderer?color=green&style=flat-square" />
</a>

This package is created for people who using [Chakra-UI's](https://chakra-ui.com/) and [react-markdown](https://github.com/remarkjs/react-markdown) together.

### The Problem

CSSReset component is turning down every default style of elements that provided by browser. HTML elements like h1, h2, h3... aren't get default styles but Markdown need them for rendering purposes. This package is solving the problem by changing renderer defaults with chakra-ui's components.

For example, when you want to render level 2 heading component, it is rendering: `<Heading as="h2" size="xl">Your Header Title</Heading>`.

### Install

Make @chakra-ui/react installation how they tell you on their [Getting Started - Chakra UI](https://chakra-ui.com/docs/getting-started) page.

```sh
$ yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion chakra-ui-markdown-renderer

# or

$ npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion chakra-ui-markdown-renderer
```

### Usage

```jsx
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

<ReactMarkdown components={ChakraUIRenderer()} children={markdown} skipHtml />;
```

### Extending Defaults

`chakra-ui-markdown-renderer` is merging standart theme with your theme by default.

```jsx
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const newTheme = {
  p: props => {
    const { children } = props;
    return (
      <Text mb={2} fontSize={'12px'}>
        {children}
      </Text>
    );
  },
};

<ReactMarkdown
  components={ChakraUIRenderer(newTheme)}
  children={markdown}
  skipHtml
/>;
```
