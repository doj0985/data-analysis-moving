import React from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

export default class LGMap extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
      coords: {
        lat: 59.95,
        lng: 30.33
      },
      'coordsLoading': true
     };
   }

   componentDidMount() {
     const addr = this.props.address.split(" ").join("+");
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDfi87OPz0rr6f1oIQ_iH3boI4H53zLFAg&address=${addr}`).then(res => {
        const location = res.data.results;
        console.log(location);
        this.setState({
          location: location[0],
          coords: {
            lat: location[0].geometry.location.lat,
            lng: location[0].geometry.location.lng
          },
          coordsLoading: false
        });
      }).catch(err => {
        console.log(err)
      });
   };

  render() {
    if(this.state.location){
      return (
          <div style={{ height: '50vh', width: '100%', marginTop:'5%', display:'inline-block'}}>
            <h5>Map</h5>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDfi87OPz0rr6f1oIQ_iH3boI4H53zLFAg"}}
              defaultCenter={this.state.coords}
              defaultZoom={14}>
            </GoogleMapReact>
          </div>
      )
    } else {
      return (
        <Col xs={12} className="pt-3">

        </Col>
      )
    }

  }
}
