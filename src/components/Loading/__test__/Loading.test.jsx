import React from 'react';
import { shallow } from 'enzyme';
import snapshot from 'snap-shot';
import toJson from 'enzyme-to-json';
import Loading from '../Loading';

describe('Loading should render with the correct props', () => {

    const element = shallow(<Loading />);

    it ('Check the element snapshot', () => {
        snapshot(toJson(element));
    });

    it('Check if the props are rendered', () => {
        const shallowedLoading = shallow(<Loading style={{ height: '64px', width: '64px'}}/>)

        expect(shallowedLoading.props().height).to.exist();
        expect(shallowedLoading.props().width).to.exit();
    });

});