import React from 'react';
import {
  Text,
  Code,
  Divider,
  Link,
  Checkbox,
  ListItem,
  Heading,
  Image,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

type propsOfCoreProps = {
  children?: React.ReactNode;
  'data-sourcepos'?: any;
};

function getCoreProps(props: propsOfCoreProps): any {
  return props['data-sourcepos']
    ? { 'data-sourcepos': props['data-sourcepos'] }
    : {};
}

type DefaultsType = {
  paragraph: React.FC;
  emphasis: React.FC;
  blockquote: React.FC;
  code: React.FC<{ language: string; value: string }>;
  delete: React.FC;
  thematicBreak: React.FC;
  link: React.FC<{ href?: string }>;
  img: React.FC;
  linkReference: React.FC;
  imageReference: React.FC;
  text: React.FC;
  list: React.FC<{ start: number; ordered: boolean; depth: number }>;
  listItem: React.FC<{ checked: boolean }>;
  definition: React.FC;
  heading: React.FC<{ level: number }>;
  inlineCode: React.FC;
};

export const defaults: DefaultsType = {
  paragraph: props => {
    const { children } = props;
    return <Text mb={2}>{children}</Text>;
  },
  emphasis: props => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: props => {
    const { children } = props;
    return <Code p={2}>{children}</Code>;
  },
  code: props => {
    const { language, value } = props;
    const className = language && `language-${language}`;
    return (
      <pre {...getCoreProps(props)}>
        <Code p={2} className={className || null}>
          {value}
        </Code>
      </pre>
    );
  },
  delete: props => {
    const { children } = props;
    return <Text as="del">{children}</Text>;
  },
  thematicBreak: Divider,
  link: Link,
  img: Image,
  linkReference: Link,
  imageReference: Image,
  text: props => {
    const { children } = props;
    return <Text as="span">{children}</Text>;
  },
  list: props => {
    const { start, ordered, children, depth } = props;
    const attrs = getCoreProps(props);
    if (start !== null && start !== 1 && start !== undefined) {
      attrs.start = start.toString();
    }
    let Element = UnorderedList;
    let styleType = 'disc';
    if (ordered) {
      Element = OrderedList;
      styleType = 'decimal';
    }
    if (depth === 1) styleType = 'circle';
    return (
      <Element
        spacing={2}
        as={ordered ? 'ol' : 'ul'}
        styleType={styleType}
        pl={4}
        {...attrs}
      >
        {children}
      </Element>
    );
  },
  listItem: props => {
    const { children, checked } = props;
    let checkbox = null;
    if (checked !== null && checked !== undefined) {
      checkbox = (
        <Checkbox isChecked={checked} isReadOnly>
          {children}
        </Checkbox>
      );
    }
    return (
      <ListItem
        {...getCoreProps(props)}
        listStyleType={checked !== null ? 'none' : 'inherit'}
      >
        {checkbox || children}
      </ListItem>
    );
  },
  definition: () => null,
  heading: props => {
    const { level, children } = props;
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
      <Heading
        my={4}
        as={`h${level}`}
        size={sizes[`${level - 1}`]}
        {...getCoreProps(props)}
      >
        {children}
      </Heading>
    );
  },
  inlineCode: props => {
    const { children } = props;
    return <Code {...getCoreProps(props)}>{children}</Code>;
  },
};

function ChakraUIRenderer(theme = defaults) {
  return {
    paragraph: theme.paragraph,
    emphasis: theme.emphasis,
    blockquote: theme.blockquote,
    code: theme.code,
    delete: theme.delete,
    thematicBreak: theme.thematicBreak,
    link: theme.link,
    img: theme.img,
    linkReference: theme.linkReference,
    imageReference: theme.imageReference,
    text: theme.text,
    list: theme.list,
    listItem: theme.listItem,
    definition: theme.definition,
    heading: theme.heading,
    inlineCode: theme.inlineCode,
  };
}

export default ChakraUIRenderer;
