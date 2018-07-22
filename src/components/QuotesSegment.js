import React, { Component } from 'react';

import { Segment, Grid, Header, Image } from 'semantic-ui-react';
import NanImage from '../assets/images/avatar/nan.jpg';

class QuotesSegment extends Component {
    
    render() {
        return (
            <Segment vertical className="quote stripe segment">
                <Grid stackable celled='internally' columns='equal'>
                    <Grid.Row align="center">
                        <Grid.Column >
                            <Header as='h3'>
                                "What a Company"
                            </Header>
                            <p>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column >
                            <Header as='h3'>
                                "I shouldn't have gone with their competitor."
                            </Header>
                            <p>
                                <Image src={NanImage} className="ui avatar image"/> 
                                    <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
           

        );
    }
}

export default QuotesSegment;

/*
<div class="ui vertical stripe quote segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="column">
          <h3>"What a Company"</h3>
          <p>That is what they all say about us</p>
        </div>
        <div class="column">
          <h3>"I shouldn't have gone with their competitor."</h3>
          <p>
            <img src="assets/images/avatar/nan.jpg" class="ui avatar image"> <b>Nan</b> Chief Fun Officer Acme Toys
          </p>
        </div>
      </div>
    </div>
  </div>
*/