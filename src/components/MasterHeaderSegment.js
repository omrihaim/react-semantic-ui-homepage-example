import React, { Component } from 'react';

import {MASTERHEAD_OFF_SCREEN, MASTERHEAD_ON_SCREEN} from '../events';
import {connect} from 'react-redux';

import { Segment, Visibility } from 'semantic-ui-react';

import HomepageMenu from './HomepageMenu';
import SloganContainer from './SloganContainer';

class MasterHeaderSegment extends Component {
      
    constructor(props) {
        super(props);

        this.masterHeaderOnScreen = props.masterHeaderOnScreen;
        this.masterHeaderOffScreen = props.masterHeaderOffScreen;
    }

    render() {
        
        return (
            <Visibility
                once={false}
                onOnScreen={this.masterHeaderOnScreen}
                onOffScreen={this.masterHeaderOffScreen}
            >
                <Segment inverted vertical textAlign='center' className="masthead">
                    <HomepageMenu />
                    <SloganContainer />
                </Segment>
            </Visibility> 
        );
    }
}

const mapStateToProps = store => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    masterHeaderOnScreen: () => {
      dispatch({
        type: MASTERHEAD_ON_SCREEN
      })
    },
    masterHeaderOffScreen: () => {
      dispatch({
        type: MASTERHEAD_OFF_SCREEN
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(MasterHeaderSegment);

/*
    <div class="ui inverted vertical masthead center aligned segment">

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

    <div class="ui text container">
      <h1 class="ui inverted header">
        Imagine-a-Company
      </h1>
      <h2>Do whatever you want when you want to.</h2>
      <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
    </div>

  </div>
*/