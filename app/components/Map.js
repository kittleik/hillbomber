var React = require('react');

var Leaflet = require('react-leaflet');
var Map = Leaflet.Map;
var Marker = Leaflet.Marker;
var Popup = Leaflet.Popup;
var TileLayer = Leaflet.TileLayer;
var Polyline = Leaflet.Polyline;

var position=[63.408047,10.404053]

var SkateMap = React.createClass({
  propTypes:{
    positions: React.PropTypes.array,
    clickHandler: React.PropTypes.func
  },
  render: function(){
    return(
      <Map center={this.props.positions[0]} zoom={13} style={{height:"100%"}} onClick={this.props.clickHandler}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.props.positions[0]}>
          <Popup>
            <span>Start</span>
          </Popup>
        </Marker>
        <Marker position={this.props.positions.slice(-1)[0]}>
          <Popup>
            <span>End</span>
          </Popup>
        </Marker>
        <Polyline positions={this.props.positions} />
      </Map>
    );
  }
});

module.exports = SkateMap;
