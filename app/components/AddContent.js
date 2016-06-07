var React = require('react')

var blueBg = require('../styles').blueBg;
var bottomRightPositioning = require('../styles').bottomRightPositioning;
var mapSize = require('../styles').mapSize;

var CreatorMap = require('../components/MapCreator');

var positions =[
  {lat:63.408047,lng:10.404953},
  {lat:63.401060,lng:10.400070},
  {lat:63.408910,lng:10.407060}]

var AddContent=React.createClass({
  render:function(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 text-center" style={blueBg}>
            asd
          </div>
          <div className="col-sm-9 text-center" style={mapSize}>
            <CreatorMap />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = AddContent;
