import React from 'react';
declare type DefaultsType = {
  paragraph: React.FC;
  emphasis: React.FC;
  blockquote: React.FC;
  code: React.FC<{
    language: string;
    value: string;
  }>;
  delete: React.FC;
  thematicBreak: React.FC;
  link: React.FC<{
    href?: string;
  }>;
  img: React.FC;
  linkReference: React.FC;
  imageReference: React.FC;
  text: React.FC;
  list: React.FC<{
    start: number;
    ordered: boolean;
    depth: number;
  }>;
  listItem: React.FC<{
    checked: boolean;
  }>;
  definition: React.FC;
  heading: React.FC<{
    level: number;
  }>;
  inlineCode: React.FC;
};
export declare const defaults: DefaultsType;
declare function ChakraUIRenderer(
  theme?: DefaultsType
): {
  paragraph: React.FC<{}>;
  emphasis: React.FC<{}>;
  blockquote: React.FC<{}>;
  code: React.FC<{
    language: string;
    value: string;
  }>;
  delete: React.FC<{}>;
  thematicBreak: React.FC<{}>;
  link: React.FC<{
    href?: string | undefined;
  }>;
  img: React.FC<{}>;
  linkReference: React.FC<{}>;
  imageReference: React.FC<{}>;
  text: React.FC<{}>;
  list: React.FC<{
    start: number;
    ordered: boolean;
    depth: number;
  }>;
  listItem: React.FC<{
    checked: boolean;
  }>;
  definition: React.FC<{}>;
  heading: React.FC<{
    level: number;
  }>;
  inlineCode: React.FC<{}>;
};
export default ChakraUIRenderer;
