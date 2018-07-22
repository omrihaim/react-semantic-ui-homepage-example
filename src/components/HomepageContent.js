import React, { Component } from 'react';

import MasterHeaderSegment from './MasterHeaderSegment';
import CheckThemOutSegment from './CheckThemOutSegment';
import QuotesSegment from './QuotesSegment';
import CaseStudiesSegment from './CaseStudiesSegment';
import WebsiteFooter from './WebsiteFooter';

class HomepageContent extends Component {
  render() {
    return (
        <div>
          <MasterHeaderSegment/>
          <CheckThemOutSegment />
          <QuotesSegment/>
          <CaseStudiesSegment/>
          <WebsiteFooter/>
      </div>
    );
  }
}

export default HomepageContent;
