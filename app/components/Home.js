var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var blueBg = require('../styles').blueBg;

function Home(props){
  return(
    <div className="jumbotron col-sm-12 text-center" style={blueBg}>
      <h1>
        Hello World
      </h1>
      <p>Ja dette er spennende</p>
    </div>
  )
}

module.exports = Home;
