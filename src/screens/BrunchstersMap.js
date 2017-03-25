import React, { Component } from 'react'
import { View } from 'react-native'

import {
	H1,
	H2,
	Spinner
} from 'nachos-ui'

import Expo, {
	Location,
	MapView,
	Permissions
} from 'expo'

import { stringify as queryString } from 'query-string';
import sharedStyles from '../utils/shared-styles'

import RecommendationsMap from '../components/RecommendationsMap'

import {
	FOURSQUARE_CLIENT_ID,
	FOURSQUARE_CLIENT_SECRET
} from '../../api_keys'

const FOURSQUARE_ENDPOINT = 'https://api.foursquare.com/v2/venues/explore'
const API_DEBOUNCE_TIME = 2000

class BrunchstersMap extends Component {
	state = {
    mapRegion: null,
    gpsAccuracy: null,
    recommendations: [],
    lookingFor: null,
    headerLocation: null,
    last4sqCall: null
  }
  watchID = null

  componentWillMount() {
		async function getLocationAsync() {
		  const { status } = await Permissions.askAsync(Permissions.LOCATION);

		  if (status === 'granted') {
		    return Location.getCurrentPositionAsync({enableHighAccuracy: false});
		  } else {
		    throw new Error('Location permission not granted');
		  }
		}

		getLocationAsync().then(position => {
			console.log('coords: ', position)
			let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }

			this.onRegionChange(region, position.coords.accuracy)
		})
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  onRegionChange(region, gpsAccuracy) {
    this.fetchVenues(region)

    this.setState({
      mapRegion: region,
      gpsAccuracy: gpsAccuracy || this.state.gpsAccuracy
    })
  }

  fetchVenues(region, lookingFor) {
    if (!this.shouldFetchVenues(lookingFor)) return

    const query = this.venuesQuery(region, lookingFor)

  	fetch(`${FOURSQUARE_ENDPOINT}?${query}`)
      .then(fetch.throwErrors)
      .then(res => res.json())
      .then(json => {
        if (json.response.groups) {
          this.setState({
            recommendations: json.response.groups.reduce(
              (all, g) => all.concat(g ? g.items : []), []
            ),
            headerLocation: json.response.headerLocation,
            last4sqCall: new Date()
          })
        }
      })
      .catch(err => console.log(err))
  }

  shouldFetchVenues(lookingFor) {
    return lookingFor != this.state.lookingFor
		   || this.state.last4sqCall === null
		   || new Date() - this.state.last4sqCall > API_DEBOUNCE_TIME
  }

  venuesQuery({ latitude, longitude }, lookingFor) {
    return queryString({
      client_id: FOURSQUARE_CLIENT_ID,
      client_secret: FOURSQUARE_CLIENT_SECRET,
      v: 20170305,
      ll: `${latitude}, ${longitude}`,
      llAcc: this.state.gpsAccuracy,
      section: lookingFor || this.state.lookingFor || 'brunch',
      limit: 10,
      openNow: 1,
      venuePhotos: 1
    })
  }

  // onTopicSelect(lookingFor) {
  //   this.fetchVenues(this.state.mapRegion, lookingFor)
	//
  //   this.setState({
  //       lookingFor: lookingFor
  //   })
  // }

	render() {
		const { mapRegion, lookingFor } = this.state

    if (!mapRegion) {
			return (
				<View style={sharedStyles.container}>
					<Spinner />
				</View>
			)
    }

		return (
			<RecommendationsMap {...this.state}
				onRegionChange={this.onRegionChange.bind(this)} />
		)
	}
}

export default BrunchstersMap
