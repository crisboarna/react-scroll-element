import React, { FC } from 'react';
import './scroll-element.css';
import { ScrollElementProps } from './index';

const ScrollElement: FC<ScrollElementProps> = ({
  type = 'chevron',
  text,
  colorText = '#ffffff',
  colorIcon = '#ffffff',
  colorIconFade = '#ffffff',
}) => (
  <div
    className={'scroll-element'}
    data-testid={'scroll-element/root'}
    style={
      {
        '--react-scroll-element-color-text': colorText,
        '--react-scroll-element-color-icon': colorIcon,
        '--react-scroll-element-color-fade': colorIconFade + '19',
      } as React.CSSProperties
    }
  >
    <div
      className={`scroll-element-${type}`}
      data-testid={'scroll-element/type'}
    >
      {type === 'chevron-sliding-fade-triple' ? (
        [<span key={1} />, <span key={2} />, <span key={3} />]
      ) : (
        <span />
      )}
      {text}
    </div>
  </div>
);

export default ScrollElement;
