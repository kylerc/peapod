/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/


// Dependencies
import React from 'react';
import { Block } from 'utility/components.js';

/**
* BlockRight component
* @element Code
*/
module.exports = function (componentName) {
    return class Pod_Component extends React.Component {

        static displayName = componentName;

        static propTypes = {
            children: React.PropTypes.any,
        }

        render() {
            return (
                <Block {...this.props} align="right">
                    {this.props.children}
                </Block>
            );
        }

    };
};
