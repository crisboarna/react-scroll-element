import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import ScrollElement from '../../../../react-scroll-element/src';

type ThemeAwareProps = {
  readonly type: string;
  readonly colorText?: string;
  readonly colorIcon?: string;
  readonly colorIconFade?: string;
};

export default function ThemeAwareComponent({
  type,
  colorIcon,
  colorIconFade,
  colorText,
}: ThemeAwareProps): JSX.Element {
  const { isDarkTheme } = useColorMode();
  return (
    <ScrollElement
      type={type}
      text={'scroll'}
      colorText={colorText ? colorText : isDarkTheme ? '#ffffff' : '#000000'}
      colorIcon={colorIcon ? colorIcon : isDarkTheme ? '#ffffff' : '#000000'}
      colorIconFade={
        colorIconFade ? colorIconFade : isDarkTheme ? '#ffffff' : '#000000'
      }
    />
  );
}
