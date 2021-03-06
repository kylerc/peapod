import React from 'react';
import { ContentWrap, Heading, Paragraph, Code, Code_Block } from 'utility/components.js';
import PureRender from 'utility/pureRender.js';
import Pod_Helper from 'utility/helper.js'; // eslint-disable-line

const codeExample__javascript =
`function $initHighlight(block, flags) {
    try {
        if (block.className.search(/\bno\-highlight\b/) != -1)
        return processBlock(block.function, true, 0x0F) + ' class=""';
    } catch (e) {
        /* handle exception */
        var e4x =
        <div>
            Example
            <p>1234</p></div>;
            }
            for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
                if (checkCondition(classes[i]) === undefined)
                return /\d+[\s/]/g;
            }
            console.log(Array.every(classes, Boolean));
        <div>
    }
}`;

const codeExample__css =
`@import url('print.css');
@page:right {
    margin: 1cm 2cm 1.3cm 4cm;
}

@font-face {
    font-family: Chunkfive; src: url('Chunkfive.otf');
}

div.text,
#content,
li[lang=ru] {
    font: Tahoma, Chunkfive, sans-serif;
    background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
    width: 100%;
}`;

const codeExample__cpp =
`#include <iostream>
#define IABS(x) ((x) < 0 ? -(x) : (x))

int main(int argc, char *argv[]) {

    /* An annoying "Hello World" example */
    for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

    char c = '\\n';
    unordered_map <string, vector<string> > m;
    m["key"] = "\\\\\\\"; // this is an error

    return -2e3 + 12l;
}`;

const codeExample__python =
`@requires_authorization
def somefunc(param1='', param2=0):
r'''A docstring'''
if param1 > param2: # interesting
print 'Gre\'ater'
return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
pass

>>> message = '''interpreter
... prompt'''`;

const codeExample__jsx =
`<ContentWrap>

    <Heading kind="h4">Inline code</Heading>
    <Paragraph>
        Here is some <Code>Inline code</Code> and some text.
    </Paragraph>

    <Heading kind="h4">Code Block</Heading>
    <Paragraph>
        Language is auto-detected. Can be explicity defined as well
    </Paragraph>
    <Code_Block label="Javascript">{codeExample__javascript}</Code_Block>
    <Code_Block label>{codeExample__html}</Code_Block>
    <Code_Block label>{codeExample__css}</Code_Block>
    <Code_Block label>{codeExample__cpp}</Code_Block>
    <Code_Block label>{codeExample__python}</Code_Block>

</ContentWrap>`;

module.exports = class CodeExample extends React.Component {

    shouldComponentUpdate = PureRender;

    render() {
        return (
            <ContentWrap>
                <Heading kind="h4">Inline code</Heading>
                <Paragraph>
                    Here is some <Code>Inline code</Code> and some text.
                </Paragraph>

                <Heading kind="h4">Code Block</Heading>
                <Paragraph>
                    Language is auto-detected (Can also be explicity defined).
                </Paragraph>
                <Code_Block label>{codeExample__javascript}</Code_Block>
                <Code_Block label="JSX markup">{codeExample__jsx}</Code_Block>
                <Code_Block label>{codeExample__css}</Code_Block>
                <Code_Block label>{codeExample__cpp}</Code_Block>
                <Code_Block label>{codeExample__python}</Code_Block>

            </ContentWrap>
        );
    }

};
