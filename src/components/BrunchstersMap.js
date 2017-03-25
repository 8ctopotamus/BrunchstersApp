
import React, { Component } from 'react';

import { MapView } from 'expo'
import { H2, H3 } from 'nachos-ui';

import sharedStyles from '../utils/shared-styles';
// import Recommendation from './Recommendation';

const BrunchstersMap = ({ mapRegion, gpsAccuracy, recommendations, lookingFor,
                              headerLocation, onRegionChange }) => (

    <MapView.Animated region={mapRegion}
                      style={sharedStyles.fullscreen}
                      onRegionChange={onRegionChange}>

        <H2>
            {lookingFor ? `${lookingFor} in` : ''} {headerLocation}
        </H2>

        {/* <MapView.Circle center={mapRegion}
                        radius={gpsAccuracy*1.5}
                        strokeWidth={0.5}
                        strokeColor="rgba(66, 180, 230, 1)"
                        fillColor="rgba(66, 180, 230, 0.2)"
                        />

        <MapView.Circle center={mapRegion}
                        radius={5}
                        strokeWidth={0.5}
                        strokeColor="rgba(66, 180, 230, 1)"
                        fillColor="rgba(66, 180, 230, 1)"
                        /> */}

        {/* {recommendations.map(r => <Recommendation {...r} key={r.venue.id} />)} */}

    </MapView.Animated>
);

export default BrunchstersMap;
