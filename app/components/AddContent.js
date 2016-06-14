var React = require('react');

console.log(Firebase);
console.log(React);
console.log(ReactFireMixin);

var blueBg = require('../styles').blueBg;
var bottomRightPositioning = require('../styles').bottomRightPositioning;
var mapSize = require('../styles').mapSize;
var SkateMap = require('../components/Map');

var positions =[
  {lat:63.408047,lng:10.404953},
  {lat:63.401060,lng:10.400070},
  {lat:63.408910,lng:10.407060}]

var AddContent=React.createClass({
  getInitialState:function(){
    return{
      positions:[{lat:63.408047,lng:10.404953}],
      newStart: true,
      name: "",
      description: ""
    }
  },
  componentWillMount: function(){
    this.firebaseRef = new Firebase("https://hillbomber.firebaseio.com/");
  },
  componentDidMount:function(){

  },
  mapClickHandler:function(e){
    if (this.state.newStart){
      var newPositions = [e.latlng];
    }else{
      var newPositions = this.state.positions.slice();
      newPositions.push(e.latlng);
    }
    this.setState({
        positions: newPositions,
        newStart:false
    });
    console.log(this.state.positions);
  },
  handleNameChange:function(e){
    this.setState({
      name: e.target.value
    })
  },
  handleDescriptionChange:function(e){
    this.setState({
      description: e.target.value
    })
  },
  regretHandler:function(){
    var newPositions = this.state.positions.slice();
    newPositions.pop();
    this.setState({
      positions: newPositions
    });
  },
  submitHandler:function(e){
    console.log(this.state.name);
    this.firebaseRef.push({
      name: this.state.name,
      description: this.state.description,
      positions: this.state.positions
    })
  },
  render:function(){
    return(
      <div className="container-fluid">
        <div style={bottomRightPositioning}>
          <button className="btn btn-danger"  style={{width:"100%"}} onClick={this.regretHandler}>Regret</button>
        </div>
        <div className="row">
          <div className="col-sm-3 text-center" style={blueBg}>

            <div className="form-group">
              <label >Name:</label>
              <input className="form-control" value={this.state.name} onChange={this.handleNameChange}></input>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea rows="5" className="form-control" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" style={{width:"80%"}} onClick={this.submitHandler}>Submit</button>
            </div>
          </div>
          <div className="col-sm-9 text-center" style={mapSize}>
            <SkateMap positions={this.state.positions} clickHandler={this.mapClickHandler}/>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = AddContent;
