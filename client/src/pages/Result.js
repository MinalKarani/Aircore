import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { ListItem,List } from "../components/List";
import Map from '../components/Map.js'
import axios from "axios";
import API from "../utils/API";
import ResultList from "../components/ResultList";

//http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC
class Result extends Component {  
  state = {    
    flag: false,
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
          
          });
          return(
          <ResultList
            add={this.state.address}
            county={this.state.county}
            levels={this.state.levels}
            building_type={this.state.building_type}
            finished_size={this.state.finished_size}
            year_built={this.state.year_built}
            zipresults={this.state.zipresults}
            Url={this.state.mapUrl}
            

          />    )
      })

      .catch(err => console.log(err));
    
  }

  render()
    {
      
    if(!this.props.flag)
    {
      return(      
        <Jumbotron>
          <legend>Address Listing</legend>
          <br></br>
          <button type="button" className="btn btn-primary mt-3 btnNew" data-id={this.props.year_built} onClick={this.displayMap}>Save</button>
          <img src={this.props.Url} alt="MapUrl"/>
          <ul>
          
          <li>
            Address:
            <span>{this.props.add}</span>
          </li>
          <li>
          County:
          <span>{this.props.county}</span>
          </li>
          <li>
          building_type:
          <span>{this.props.building_type}</span>
          </li>
          <li>
          Levels:
          <span>{this.props.levels}</span>
          </li>
          <li>
          Finished Size:
          <span>{this.props.finished_size}</span>
          </li>
          <li>
          year_built:
          <span>{this.props.year_built}</span>
          </li>
          </ul>
          <br></br>
          
          <Map/>
          
          </Jumbotron>        

      )
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