/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/


//Dependencies
import React from 'react';
import Pod_Styler from 'styler.js';
import {Block} from 'components.js'

/**
* BlockRight component
* @element Code
*/
module.exports = class Block_Right extends React.Component {

    render() {
        var style = Pod_Styler.getStyle(this);

        return (
            <Block {...this.props} align="right">
                {this.props.children}
            </Block>
        );

    }

};