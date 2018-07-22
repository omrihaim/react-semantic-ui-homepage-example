import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Sidebar, Menu } from 'semantic-ui-react'
        
class SideBarMenu extends Component {
    state = { 
        activeItem: 'Home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        const visible = this.props.isVisible;

        return (
            <Sidebar
                as={Menu}
                animation='push'
                inverted
                vertical
                visible={visible}
            >
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
            <Menu.Item
                name='Log in'
                active={activeItem === 'Careers'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='Sign up'
                active={activeItem === 'Careers'}
                onClick={this.handleItemClick}
            />
          </Sidebar>
        );
    }
}

const mapStateToProps = store => {
    return {
        isVisible: store.sidebarMenu.visible,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {}
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps)(SideBarMenu);
  

/*
<div class="ui vertical inverted sidebar menu">
  <a class="active item">Home</a>
  <a class="item">Work</a>
  <a class="item">Company</a>
  <a class="item">Careers</a>
  <a class="item">Login</a>
  <a class="item">Signup</a>
</div>
*/