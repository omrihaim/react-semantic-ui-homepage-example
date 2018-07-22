import React, { Component } from 'react';

import { Container, Header, Button } from 'semantic-ui-react'

class SloganContainer extends Component {
    
    render() {
        return (
            <Container text>
                <Header as='h1' inverted>
                    Imagine-a-Company
                </Header>
                <Header as='h2' inverted>
                    Do whatever you want when you want to.
                </Header>
                <Button size='huge' primary>
                    Get Started <i className="right arrow icon"></i>
                </Button>
            </Container>
        );
    }
}

export default SloganContainer;

/*
<div className="ui text container">
<h1 className="ui inverted header">
  Imagine-a-Company
</h1>
<h2>Do whatever you want when you want to.</h2>
<div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
</div>
*/
