var React = require('react');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Hillbomber</a>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
