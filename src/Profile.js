import React, { Component } from 'react';
import './Profile.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


class Profile extends Component {
    constructor(props) {
        super(props);
        const menu1 = (
            <Menu>
                <Menu.Item key="0">
                    Profile
                </Menu.Item>
                <Menu.Item
                    key="1"
                    onClick={this.props.onClick}
                >
                    My playlist
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">Signout</Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu>
                <Menu.Item key="0">
                    Profile
                </Menu.Item>
                <Menu.Item key="1">
                    All songs
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">Signout</Menu.Item>
            </Menu>
        );
        this.state = {
            menu: [menu1, menu2],
            menu_state: 0,
        }
    }
    render() {
        return (
            <Dropdown
                overlay={this.state.menu[this.state.menu_state]}
                trigger={['click']}
                size="large"
                style={{ borderColor: "black", borderStyle: "groove" }
                }
            >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Tanjiro Kamado <DownOutlined />
                </a>
            </Dropdown >
        )
    }
}

export default Profile;