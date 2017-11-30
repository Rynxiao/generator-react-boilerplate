import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/common/button/Button';

describe('<Button />', function () {

    let component;
    beforeEach(function () {
        component = shallow(<Button />);
    });

    describe('when rendering the component', function () {

        it('should have a className of "button-component"', function () {
            expect(component.hasClass('button-component')).to.equal(true);
        });
    });
});
