# Changelog

All notable changes to this project will be documented in this file.

## [4.0.0] - 2021-11-19

### 🔥💥 Breaking Changes

- `react-markdown` is updated to `^7`. I did everything I can do to not create a breaking change but unfortunately, `Components` type is coming from `react-markdown` while it was coming from `react-markdown/src/ast-to-react` in version 6.

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

<ReactMarkdown components={ChakraUIRenderer(newTheme)} children={markdown} />;
```

## [3.0.1] - 2021-05-20

### Fixed

- Fixes `deepmerge` error that occures on `nextjs`.

## [3.0.0] - 2021-05-18

### Added

- Typescript support.

### 🔥💥 Breaking Changes

- There is no need to import `defaults` to extend/change default theme anymore. `chakra-ui-markdown-renderer` will merge default and your theme together automatically. If you have `...defaults` in your theme, you may delete it safely.

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
  escapeHtml={false}
/>;
```

## [2.0.0] - 2021-05-14

### 🔥💥 Breaking Changes

- Theme is revisited for `react-markdown v6` [big thanks to @davidgit](https://github.com/davidgit). Please be careful before update your dependencies. This update can break your all markdown settings.

To migrate to new version, change `renderers` prop with `components` like [react markdown](https://github.com/remarkjs/react-markdown/blob/main/changelog.md#600---2021-04-15) says.

```
<ReactMarkdown
  components={ChakraUIRenderer()}
  children={markdown}
  escapeHtml={false}
/>;
```

## [1.1.0] - 2021-02-05

### Major Changes

- Now List type are using `UnorderedList` and `OrderedList` components according to providing type.
- Fixes `List`s `spacing` wrong property. Changes `24` to `2`.

If you want to use old List's, just extend defaults and change `List` key with this:

```
list: props => {
  const { start, ordered, children, depth } = props;
  let styleType = 'disc';
  if (ordered) styleType = 'decimal';
  if (depth === 1) styleType = 'circle';
  return (
    <List
      spacing={24}
      as={ordered ? 'ol' : 'ul'}
      styleType={styleType}
      pl={4}
    >
      {children}
    </List>
);
```

## [1.0.0] - 2020-12-16

### Added

- Library now uses `rollup` as a bundler.

### 🔥💥 Breaking Changes

- No more using `@chakra-ui/core` like Chakra-UI did. We're using `@chakra-ui/react` instead of `@chakra-ui/core`
- `@chakra-ui/react` and other dependencies that used by `@chakra-ui/react` now added as peerDependency. You should add `@emotion/react @emotion/styled framer-motion` packages to your project.

## [0.2.0] - 2020-04-17

### Added

- Ability to extend defaults. Allow users to pass in an object as parameter and extend defaults.
