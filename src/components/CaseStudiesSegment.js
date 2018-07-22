import React, { Component } from 'react';

import { Segment, Container, Header, Button, Divider } from 'semantic-ui-react';

class CaseStudiesSegment extends Component {
    
    render() {
        return (
            <Segment vertical className="ui vertical stripe">
                <Container text className="ui">
                    <Header as='h3'>
                        Breaking The Grid, Grabs Your Attention
                    </Header>
                    <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
                    <Button size="large">Read More</Button>
                    <Divider horizontal><a href="/">Case Studies</a></Divider>
                    <Header as='h3'>
                        Did We Tell You About Our Bananas?
                    </Header>
                    <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
                    <Button size="large">I'm Still Quite Interested</Button>
                </Container>
            </Segment>
        );
    }
}

export default CaseStudiesSegment;
/*
    <div class="ui vertical stripe segment">
        <div class="ui text container">
        <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
        <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
        <a class="ui large button">Read More</a>
        <h4 class="ui horizontal header divider">
            <a href="#">Case Studies</a>
        </h4>
        <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
        <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
        <a class="ui large button">I'm Still Quite Interested</a>
        </div>
    </div>
*/