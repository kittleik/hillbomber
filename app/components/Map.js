var React = require('react');

var Leaflet = require('react-leaflet');
var Map = Leaflet.Map;
var Marker = Leaflet.Marker;
var Popup = Leaflet.Popup;
var TileLayer = Leaflet.TileLayer;
var Polyline = Leaflet.Polyline;

var line = [
  {lat:63.408047,lng:10.404953},
  {lat:63.401060,lng:10.400070},
  {lat:63.408910,lng:10.407060}]

var position=[63.408047,10.404053]

var SkateMap = React.createClass({
  propTypes:{
    positions: React.PropTypes.array.isRequired
  },
  getInitialState: function(){
    return{
      positions: line
    }
  },
  render: function(){
    return(
      <Map center={position} zoom={13} style={{height:"100%"}}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
        <Polyline positions={this.props.positions} />
      </Map>
    );
  }
});

module.exports = SkateMap;
