import React, { Component } from 'react';
import './NewsFeed.css';
import { Button, Card, Menu } from 'antd';


class NewsFeed extends Component {
    constructor(props) {
        super(props);
    }
    seeMore() {
        //
    }
    render() {
        return (
            <Card hoverable bordered={false} onClick={this.props.onClick}>
                <div className="User-name" >
                    <b> {this.props.username}</b>
                </div>
                <div >
                    {this.props.usercontent}
                </div>
            </Card >
        )
    }
}

export default NewsFeed;