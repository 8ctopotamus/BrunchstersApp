import React, { Component } from 'react';
import { Text } from 'react-native'
import { MapView } from 'expo'

import sharedStyles from '../shared-styles';
import Recommendation from './Recommendation';

const RecommendationsMap = ({ mapRegion, gpsAccuracy, recommendations, lookingFor,
                              headerLocation, onRegionChange }) =>{

    return (<MapView.Animated region={mapRegion}
                      style={sharedStyles.fullscreen}
                      onRegionChange={onRegionChange}>

        {/*<Text>
            {lookingFor ? `${lookingFor} in` : ''} {headerLocation}
        </Text> */}

        <MapView.Circle center={mapRegion}
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
                        />

        {recommendations.map(r => <Recommendation {...r} key={r.venue.id} />)}

    </MapView.Animated>)
}

export default RecommendationsMap;
