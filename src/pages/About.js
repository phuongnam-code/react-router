import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export class About extends Component {
    render() {
        return (
            <div>
                <Prompt
                    when={true}
                    message="Are you sure you want to leave?"
                />
                <h2>This is the About Page</h2>
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
                    in efficitur arcu congue. Nam fermentum commodo egestas.
                </p>
            </div>
        )
    }
}

export default About;