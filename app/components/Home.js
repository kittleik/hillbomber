var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SkateMap = require('../components/Map')

var blueBg = require('../styles').blueBg;

function Home(props){
  return(
    <div style={{height:'500px'}}>
      <SkateMap />
    </div>
  )
}

module.exports = Home;
