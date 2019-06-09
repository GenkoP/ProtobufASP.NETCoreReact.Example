import React, { Component } from 'react';
import { FetchData } from './FetchData';
import { protobufFetch } from './fetchProtobuf';

export class WeatherLayoutProtobuf extends Component {
    render() {
        return (
            <div>
                <FetchData fetchData={protobufFetch} />
            </div>
        );
    }
}