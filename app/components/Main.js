var React = require('react');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#/createMap">Add Skate Route</a></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
