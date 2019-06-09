import React, { Component } from 'react';
import { FetchData } from './FetchData';
import { fetchJson } from './fetchJson';

export class WeatherLayoutJSON extends Component {
    render() {
        return (
            <div>
                <FetchData fetchData={fetchJson} />
            </div>
        );
    }
}