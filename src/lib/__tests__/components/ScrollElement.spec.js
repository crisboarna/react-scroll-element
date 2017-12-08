import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScrollElement from '../../components/ScrollElement';

describe('ScrollElement', () => {
  let component;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  describe('basic rendering', () => {
    it('should render  with skills array', () => {
      component = shallow(<ScrollElement />);
      expect(component.exists()).toEqual(true);
    });
  });

  describe('snapshots',() => {
    it('default component', () => {
      component = shallow(<ScrollElement/>);
      expect(component).toMatchSnapshot();
    });

    it('text', () => {
      component = shallow(<ScrollElement text='TEST'/>);
      expect(component).toMatchSnapshot();
    });

    describe('types',() => {
      it('chevron', () => {
        component = shallow(<ScrollElement type='chevron'/>);
        expect(component).toMatchSnapshot();
      });

      it('chevron sliding', () => {
        component = shallow(<ScrollElement type = 'chevron-sliding'/>);
        expect(component).toMatchSnapshot();
      });

      it('chevron circle', () => {
        component = shallow(<ScrollElement type = 'chevron-circle'/>);
        expect(component).toMatchSnapshot();
      });

      it('chevron circle pulse', () => {
        component = shallow(<ScrollElement type = 'chevron-circle-pulse'/>);
        expect(component).toMatchSnapshot();
      });
    });
  });
});