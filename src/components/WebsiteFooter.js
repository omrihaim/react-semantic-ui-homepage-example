import React, { Component } from 'react';

import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

class WebsiteFooter extends Component {
    
    render() {
        return (
            <Segment vertical inverted className="footer">
                <Container>
                    <Grid stackable inverted divided className="equal height">
                            <Grid.Column width={3}>
                                <Header as='h4' inverted>About</Header>
                                <List inverted link>
                                    <List.Item as='a'>Sitemap</List.Item>
                                    <List.Item as='a'>Contact Us</List.Item>
                                    <List.Item as='a'>Religious Ceremonies</List.Item>
                                    <List.Item as='a'>Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header as='h4' inverted>Services</Header>
                                <List link inverted>
                                    <List.Item as='a'>Banana Pre-Order</List.Item>
                                    <List.Item as='a'>DNA FAQ</List.Item>
                                    <List.Item as='a'>How To Access</List.Item>
                                    <List.Item as='a'>Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>Footer Header</Header>
                                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                            </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default WebsiteFooter;

/*
    <div class="ui inverted vertical footer segment">
        <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
            <h4 class="ui inverted header">About</h4>
            <div class="ui inverted link list">
                <a href="#" class="item">Sitemap</a>
                <a href="#" class="item">Contact Us</a>
                <a href="#" class="item">Religious Ceremonies</a>
                <a href="#" class="item">Gazebo Plans</a>
            </div>
            </div>
            <div class="three wide column">
            <h4 class="ui inverted header">Services</h4>
            <div class="ui inverted link list">
                <a href="#" class="item">Banana Pre-Order</a>
                <a href="#" class="item">DNA FAQ</a>
                <a href="#" class="item">How To Access</a>
                <a href="#" class="item">Favorite X-Men</a>
            </div>
            </div>
            <div class="seven wide column">
            <h4 class="ui inverted header">Footer Header</h4>
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
        </div>
        </div>
  </div>
*/