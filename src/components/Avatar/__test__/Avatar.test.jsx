import React from 'react';
import { shallow } from 'enzyme';
import snapshot from 'snap-shot';
import toJson from 'enzyme-to-json';
import Avatar from '../Avatar';

describe('Avatar should render with the correct props', () => {

    const element = shallow(<Avatar />);

    it ('Check the element snapshot', () => {
        snapshot(toJson(element));
    });

    it('Check if the props are rendered', () => {
        const shallowedAvatar = shallow(<Avatar style={{ height: '64px', width: '64px'}}/>)

        expect(shallowedAvatar.props().height).to.exist();
        expect(shallowedAvatar.props().width).to.exit();
    });

});