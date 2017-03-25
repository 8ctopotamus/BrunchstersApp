import React, { Component } from 'react';
import { Image, Text, View } from 'react-native'
import { MapView } from 'expo';
import { Button, Card, H3, Strong, P, Em} from 'nachos-ui'

class Recommendation extends Component {
  get photo() {
    const photo = this.props.venue.photos.groups[0].items[0];

    return `${photo.prefix}300x500${photo.suffix}`;
  }

  render() {
    const { venue, tips } = this.props;

    return (
      <MapView.Marker coordinate={{latitude: venue.location.lat,
                                   longitude: venue.location.lng}}>

        <MapView.Callout>
          <Card width={200}
							  height={300}
								squared
							  image={this.photo}
							  bodyContent={<H3>{venue.name}</H3>}
								footerContent={<Button kind="squared">Set Brunch location</Button>}>
          </Card>
        </MapView.Callout>
      </MapView.Marker>
    )
  }
}

export default Recommendation;
