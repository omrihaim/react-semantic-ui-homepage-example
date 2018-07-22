import React, { Component } from 'react';

import {connect} from 'react-redux';

import { Transition, Menu, Button, Container } from 'semantic-ui-react'

class FollowingMenu extends Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        const visible = true;//this.props.isVisible;

        return (
            <Transition visible={visible}>
                <Container>
                    <Menu size="large" fixed='top'>
                        <Menu.Item 
                            name='Home' 
                            active={activeItem === 'Home'} 
                            onClick={this.handleItemClick} 
                        />
                        <Menu.Item
                            name='Work'
                            active={activeItem === 'Work'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Company'
                            active={activeItem === 'Company'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Careers'
                            active={activeItem === 'Careers'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Button >Log in</Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button primary >Sign up</Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Transition>
        );
    }
}

const mapStateToProps = store => {
    return {
        isVisible: store.followingMenu.visible,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {}
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps)(FollowingMenu);

/*
<div class="ui large top fixed hidden menu">
  <div class="ui container">
    <a class="active item">Home</a>
    <a class="item">Work</a>
    <a class="item">Company</a>
    <a class="item">Careers</a>
    <div class="right menu">
      <div class="item">
        <a class="ui button">Log in</a>
      </div>
      <div class="item">
        <a class="ui primary button">Sign Up</a>
      </div>
    </div>
  </div>
</div>
*/