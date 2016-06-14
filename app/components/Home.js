var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SkateMap = require('../components/Map');

var database = require('../utils/database');

var blueBg = require('../styles').blueBg;
var bottomRightPositioning = require('../styles').bottomRightPositioning;
var mapSize = require('../styles').mapSize;
            //
var Home = React.createClass({
  getInitialState:function(){
    return{
      positions:[],
      tracks: [],
      names:[]
    }
  },
  componentDidMount:function(){

    this.setState({
      positions:database.tracks.halla.positions,
      tracks: database.tracks,
      names: Object.keys(database.tracks)
    })
  },
  changeLine:function(track){
    this.setState({
        positions:track
    })
  },
  handleChange:function(event){
    this.setState({
      positions: this.state.tracks[event.target.value].positions
    })
  },
  render: function(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 text-center" style={blueBg}>
            <select
              multiple
              className="list-group"
              onChange={this.handleChange}
              style={{width:"100%", paddingBottom:0}}>
              {this.state.names.map(function(track){
                return(
                  <option value={track} className="list-group-item">
                    {track}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="col-sm-9 text-center" style={mapSize}>
            <SkateMap positions={this.state.positions} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
