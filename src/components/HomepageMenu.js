import React, { Component } from 'react';

import {connect} from 'react-redux';

import { Container, Menu, Icon, Button } from 'semantic-ui-react'

import {TOC_BTN_WAS_PRESSED} from '../events';

class HomepageMenu extends Component {
    state = { activeItem: 'Home' }

    constructor(props) {
        super(props);
    
        this.tocWasPressed = props.tocWasPressed;
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        
        return (
            <Container className="masthead">
            <Menu size="large" secondary inverted pointing>
                <Menu.Item className="toc" 
                    onClick={this.tocWasPressed}>
                    <Icon name='sidebar' />
                </Menu.Item>
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
                <Menu.Item position='right'>
                    <Button inverted >Log-in</Button>
                    <Button inverted >Sign up</Button>
                </Menu.Item>
            </Menu>
            </Container>
        );
    }
}

const mapStateToProps = store => {
    return {
        isVisible: store.sidebarMenu.visible,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        tocWasPressed: () => {
          dispatch({
            type: TOC_BTN_WAS_PRESSED
          })
        }
      } 
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps)(HomepageMenu);


/*
<div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a class="active item">Home</a>
        <a class="item">Work</a>
        <a class="item">Company</a>
        <a class="item">Careers</a>
        <div class="right item">
          <a class="ui inverted button">Log in</a>
          <a class="ui inverted button">Sign Up</a>
        </div>
      </div>
    </div>
*/