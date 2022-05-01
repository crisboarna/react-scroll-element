export { default } from './scroll-element';

/**
 * Interface defining all possible props for the scroll element
 */
export interface ScrollElementProps {
  /**
   * Specifies which component is to be used, please check
   * https://crisboarna.github.io/react-scroll-element for all possible types
   * Defaults to `chevron`
   */
  readonly type?: string;

  /**
   * Optional text to be placed under icon
   */
  readonly text?: string;

  /**
   * Specify the color of the text.
   * Defaults to `#ffffff`
   */
  readonly colorText?: string;

  /**
   * Specify the color of the icon.
   *
   * Defaults to `#ffffff`
   */
  readonly colorIcon?: string;

  /**
   * Specify the color of the icon fade effect.
   * Only applies to some types.
   *
   * *Note*: Should only provide full 6 digit color hex values.
   *
   * Defaults to `#ffffff`
   */
  readonly colorIconFade?: string;
}
