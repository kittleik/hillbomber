var React = require('react');


var Menu = React.createClass({
  onButtonClick: function(track){
    this.props.onButtonClick(track);
  },
  render: function(){
    return(
      <div>
        {this.props.tracks.map(function(track){
          return(
            <div>
              <button className="btn btn-default" style={{width:"100%"}} onClick>{this.onButtonClick( )}</button>
            </div>
          )
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Menu;
