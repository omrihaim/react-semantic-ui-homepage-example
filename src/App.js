import React, { Component } from 'react';

import './App.css';

import FollowingMenu from './components/FollowingMenu';
import SideBarMenu from './components/SideBarMenu';
import MasterHeaderSegment from './components/MasterHeaderSegment';
import CheckThemOutSegment from './components/CheckThemOutSegment';
import QuotesSegment from './components/QuotesSegment';
import CaseStudiesSegment from './components/CaseStudiesSegment';
import WebsiteFooter from './components/WebsiteFooter';

import { Sidebar, Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <FollowingMenu/>
        <SideBarMenu/>
        <Sidebar.Pusher>
            <MasterHeaderSegment/>
            <CheckThemOutSegment />
            <QuotesSegment/>
            <CaseStudiesSegment/>
            <WebsiteFooter/>  
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default App;

  /*
  return (
      <div className="body">
        <FollowingMenu/>
        <div className="pusher">
          <MasterHeadSegment/>
          <CheckThemOutSegment />
          <QuotesSegment/>
          <CaseStudiesSegment/>
          <WebsiteFooter/>
        </div>
      </div>
    );
    */