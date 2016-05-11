import React from 'react'
import Pod from 'components.js'

export default class ListsSection extends React.Component {

    render () {
        return (
            <Pod.Section key={'Lists'}>
                <Pod.ContentWrap>

                    <Pod.Heading>Lists</Pod.Heading>

                    <Pod.Card styler={{style:{width: '350px'}}}>

                        <Pod.Card_Section styler={{kind:'title-small'}}>
                            <Pod.Heading kind="h6" styler={{secondary: true}}>Alternating List</Pod.Heading>
                        </Pod.Card_Section>


                            <Pod.List>
                                <Pod.List_Item
                                    image={'image.png'}
                                    icon={'star_border'}
                                    secondary={"Something something"}

                                    styler={{image: 'right', icon: 'left', divider: 'right'}}
                                    onClick={(event)=>{console.log("List Item Clicked")}}
                                    onIconClick={()=>{console.log("List Item Button Clicked")}}
                                >
                                    Item #1
                                </Pod.List_Item>
                                <Pod.List_Item image={'image.png'} icon={'star_border'} secondary={"Something something"} styler={{divider: 'left'}}>
                                    Item #2
                                </Pod.List_Item>
                                <Pod.List_Item image={'image.png'} icon={'star_border'} secondary={"Something something"} styler={{image: 'right', icon: 'left', divider: 'right'}}>
                                    Item #3
                                </Pod.List_Item>
                                <Pod.List_Item image={'image.png'} icon={'star_border'} secondary={"Something something"} styler={{divider: 'left'}}>
                                    Item #4
                                </Pod.List_Item>
                                <Pod.List_Item image={'image.png'} icon={'star_border'} secondary={"Something something"} styler={{image: 'right', icon: 'left', divider: 'right'}}>
                                    Item #5
                                </Pod.List_Item>
                            </Pod.List>

                    </Pod.Card>
                    <Pod.Card styler={{style:{width: '350px'}}}>

                        <Pod.Card_Section styler={{kind:'title-small'}}>
                            <Pod.Heading kind="h6" styler={{secondary: true}}>Standard List with secondary text</Pod.Heading>
                        </Pod.Card_Section>

                            <Pod.List>
                                <Pod.List_Item secondary={"Something something"}>
                                    Item #1
                                </Pod.List_Item>
                                <Pod.List_Item secondary={"Something something"}>
                                    Item #2
                                </Pod.List_Item>
                                <Pod.List_Item secondary={"Something something"}>
                                    Item #3
                                </Pod.List_Item>
                                <Pod.List_Item secondary={"Something something"}>
                                    Item #4
                                </Pod.List_Item>
                                <Pod.List_Item secondary={"Something something"}>
                                    Item #5
                                </Pod.List_Item>
                            </Pod.List>

                    </Pod.Card>
                    <Pod.Card styler={{style:{width: '350px'}}}>

                        <Pod.Card_Section styler={{kind:'title-small'}}>
                            <Pod.Heading kind="h6" styler={{secondary: true}}>List with images</Pod.Heading>
                        </Pod.Card_Section>

                            <Pod.List>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'small'}}>Item #1</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'small'}}>Item #2</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'small'}}>Item #3</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'small'}}>Item #4</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'small'}}>Item #5</Pod.List_Item>
                            </Pod.List>

                    </Pod.Card>
                    <Pod.Card styler={{style:{width: '350px'}}}>

                        <Pod.Card_Section styler={{kind:'title-small'}}>
                            <Pod.Heading kind="h6" styler={{secondary: true}}>List with large images</Pod.Heading>
                        </Pod.Card_Section>

                            <Pod.List>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'large'}}>Item #1</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'large'}}>Item #2</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'large'}}>Item #3</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'large'}}>Item #4</Pod.List_Item>
                                <Pod.List_Item image={'image.png'} styler={{imgSize: 'large'}}>Item #5</Pod.List_Item>
                            </Pod.List>

                    </Pod.Card>
                    <Pod.Card styler={{style:{width: '350px'}}}>

                        <Pod.Card_Section styler={{kind:'title-small'}}>
                            <Pod.Heading kind="h6" styler={{secondary: true}}>List with icons</Pod.Heading>
                        </Pod.Card_Section>

                            <Pod.List>
                                <Pod.List_Item icon={'star_border'}>Item #1</Pod.List_Item>
                                <Pod.List_Item icon={'star_border'}>Item #2</Pod.List_Item>
                                <Pod.List_Item icon={'star_border'}>Item #3</Pod.List_Item>
                                <Pod.List_Item icon={'star_border'}>Item #4</Pod.List_Item>
                                <Pod.List_Item icon={'star_border'}>Item #5</Pod.List_Item>
                            </Pod.List>
                    </Pod.Card>

                </Pod.ContentWrap>
            </Pod.Section>
        )
    }

}
