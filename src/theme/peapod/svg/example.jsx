import React from 'react';
import Pod from 'utility/components.js';
import PureRender from 'utility/pureRender.js';

module.exports = class AccordionExample extends React.Component {

	    shouldComponentUpdate = PureRender;

    render() {
        return (
            <Pod.Svg file="/assets/devices/iMac.svg" />
        );
    }

};