import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { ListItem,List } from "../components/List";
import Map from '../components/Map.js'
import axios from "axios";
import API from "../utils/API";
import ResultList from "../components/ResultList";
import { Link } from "react-router-dom";

//http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC
class Result extends Component {  
  state = {    
    zipFlag: false,
    address: "",
    county: "",
    flood:"",
    school:"",
    price:0,
    levels:0,
    building_type:"",
    finished_size:0,
    year_built:0,
    
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,     
    });
  };
  
  searchHome = (str) => {
    console.log("search home:  "+str);
    var str1 = str.split(",");
    console.log(str1[0],str1[1]);
    API.displayAddress(str1[0],str1[1])

      .then(response => {
        console.log("response:  "+ JSON.stringify(response));
        this.setState({
          address:response.data.property[0].address.oneLine,
          county:response.data.property[0].area.countrysecsubd,
          building_type:response.data.property[0].summary.propclass,
          levels:response.data.property[0].summary.levels,
          finished_size:response.data.property[0].building.size.livingsize,
          year_built:response.data.property[0].summary.yearbuilt,
          zipFlag:true
          });
          
      })

      .catch(err => console.log(err));
       this.render();
  }

  render()
    {
      
    if(!this.props.flag || this.zipFlag)
    {
      return(      
        <Jumbotron>
          <legend>Address Listing</legend>
          <br></br>
          <button type="button" className="btn btn-primary mt-3 btnNew"  onClick={this.displayMap}>Save</button>
          
          <ul>
          
          <li>
          Address:
          <span>{this.props.add?this.props.add:this.state.address}</span>
          </li>
          <li>
          County:
          <span>{this.props.county?this.props.county:this.state.county}</span>
          </li>
          <li>
          building_type:
          <span>{this.props.building_type?this.props.building_type:this.state.building_type}</span>
          </li>
          <li>
          Levels:
          <span>{this.props.levels?this.props.levels:this.state.levels}</span>
          </li>
          <li>
          Finished Size:
          <span>{this.props.finished_size?this.props.finished_size:this.state.finished_size}</span>
          </li>
          <li>
          year_built:
          <span>{this.props.year_built?this.props.year_built:this.state.year_built}</span>
          </li>
          </ul>
          <br></br>
          
          <Map/>
          
          </Jumbotron>        

      )
    }
    else if(this.state.zipFlag)
    {
      return(
      <Result
      add={this.state.address}
      county={this.state.county}
      levels={this.state.levels}
      building_type={this.state.building_type}
      finished_size={this.state.finished_size}
      year_built={this.state.year_built}
      zipresults={this.state.zipresults}
      Url={this.state.mapUrl}
      

/>    
      );
    }
    else
    {
      return(        
        <Jumbotron>
        <legend>Lisiting by ZipCode</legend>
        <ol>
        {this.props.zipresults.map(item => (  
          
            <li>      
              
              <button onClick={() => this.searchHome(item.address.oneLine)}>{item.address.oneLine}</button>   
              
            </li>   
                
      ))}
      </ol>
     
      </Jumbotron>
      )
    }  
    
}
}
export default Result;