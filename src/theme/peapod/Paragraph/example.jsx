import React from 'react';
import { ContentWrap, Paragraph } from 'utility/components.js';
import PureRender from 'utility/pureRender.js';

module.exports = class ParagraphExample extends React.Component {

    shouldComponentUpdate = PureRender;

    render() {
        return (
            <ContentWrap>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </Paragraph>
            </ContentWrap>
        );
    }

};
