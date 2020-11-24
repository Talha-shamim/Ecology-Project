import React, { Component } from 'react';
import './footer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="row foot mt-100">
                    <a href="/blog">Blog</a>
                    <a href="/birds">Birds</a>
                    <a href="/air-api">Air</a>
                    <a href="/susgoals">Sustainable-goals</a>
                
                </div>
            </div>
        )
    }
}
