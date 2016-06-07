var React = require('react');

var Leaflet = require('react-leaflet');
var Map = Leaflet.Map;
var Marker = Leaflet.Marker;
var Popup = Leaflet.Popup;
var TileLayer = Leaflet.TileLayer;
var Polyline = Leaflet.Polyline;

var position=[63.408047,10.404053]

var MapCreator = React.createClass({
  handleClick:function(){
    
  },
  render:function(){
    return(
      <Map center={position} zoom={13} style={{height:"100%"}} onClick={this.handleClick}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
});

module.exports = MapCreator;
