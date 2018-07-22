import React, { Component } from 'react';

import { Segment, Grid, Header, Image, Button } from 'semantic-ui-react';
import WhiteImage from '../assets/images/wireframe/white-image.png';

class CheckThemOutSegment extends Component {
    
    render() {
        return (
            <Segment vertical className="ui vertical stripe">
                <Grid stackable verticalAlign='middle' className="ui container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3'>
                                We Help Companies and Companions
                            </Header>
                            <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                            <Header as='h3'>
                                We Make Bananas That Can Dance
                            </Header>
                            <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                        </Grid.Column>
                        <Grid.Column width={6} floated='right'>
                            <Image src={WhiteImage} size='large' bordered rounded/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <div className="center aligned column">
                        <Button size="huge">
                            Check Them Out 
                        </Button>
                    </div>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default CheckThemOutSegment;

/*
<div class="ui vertical stripe segment">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">We Help Companies and Companions</h3>
          <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
          <h3 class="ui header">We Make Bananas That Can Dance</h3>
          <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
        </div>
        <div class="six wide right floated column">
          <img src="assets/images/wireframe/white-image.png" class="ui large bordered rounded image">
        </div>
      </div>
      <div class="row">
        <div class="center aligned column">
          <a class="ui huge button">Check Them Out</a>
        </div>
      </div>
    </div>
  </div>
*/
