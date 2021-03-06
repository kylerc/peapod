import React, { Component } from 'react';
import { ContentWrap, Video } from 'utility/components.js';
import PureRender from 'utility/pureRender.js';

module.exports = class TimestampExample extends Component {

    render() {
        return (
            <ContentWrap>
                <Video src="assets/media/sample_long.mp4" poster="assets/media/sample_poster.png" />
            </ContentWrap>
        );
    }
};
