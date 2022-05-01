import ScrollElement from './scroll-element';
import React from 'react';
import { render } from '@testing-library/react';

describe('react-scroll-element', () => {
  describe('basic rendering', () => {
    it('should render  with skills array', () => {
      const { getByTestId } = render(<ScrollElement type={''} text={''} />);
      expect(getByTestId('scroll-element/root')).toBeTruthy();
    });
  });

  describe('snapshots', () => {
    it('default component', () => {
      const container = render(<ScrollElement text={''} />);
      expect(container).toMatchSnapshot();
    });

    it('text', () => {
      const container = render(<ScrollElement type={'slider'} text={'TEST'} />);
      expect(container).toMatchSnapshot();
    });

    describe('types', () => {
      it('chevron', () => {
        const container = render(
          <ScrollElement type={'chevron'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('chevron bouncing', () => {
        const container = render(
          <ScrollElement type={'chevron-bouncing'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('chevron sliding fade', () => {
        const container = render(
          <ScrollElement type={'chevron-sliding-fade'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('chevron sliding fade triple', () => {
        const container = render(
          <ScrollElement type={'chevron-sliding-fade-triple'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('chevron sliding fade spin', () => {
        const container = render(
          <ScrollElement type={'chevron-sliding-fade-spin'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('chevron circle', () => {
        const container = render(
          <ScrollElement type={'chevron-circle'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('chevron circle pulse', () => {
        const container = render(
          <ScrollElement type={'chevron-circle-pulse'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('slider', () => {
        const container = render(
          <ScrollElement type={'slider'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('slider chevron', () => {
        const container = render(
          <ScrollElement type={'slider-chevron'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });

      it('slider action', () => {
        const container = render(
          <ScrollElement type={'slider-action'} text={'TEST'} />
        );
        expect(container).toMatchSnapshot();
      });
    });

    it('colorIcon', () => {
      const container = render(
        <ScrollElement type={''} text={'TEST'} colorIcon={'#123456'} />
      );
      expect(container).toMatchSnapshot();
    });

    it('colorText', () => {
      const container = render(
        <ScrollElement type={''} text={'TEST'} colorText={'#123446'} />
      );
      expect(container).toMatchSnapshot();
    });

    it('colorIconFade', () => {
      const container = render(
        <ScrollElement type={''} text={'TEST'} colorIconFade={'#223446'} />
      );
      expect(container).toMatchSnapshot();
    });

    it('all props', () => {
      const container = render(
        <ScrollElement
          type={'chevron-circle'}
          text={'TEST'}
          colorIcon={'#123678'}
          colorText={'#987432'}
          colorIconFade={'#223446'}
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
