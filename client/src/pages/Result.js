import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { ListItem,List } from "../components/List";
import Map from '../components/Map.js'
import axios from "axios";
import API from "../utils/API";

//http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC
class Result extends Component {  
  state = {    
    address: "",
    
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,     
    });
  };
  
  searchHome = (str) => {
    console.log("search home:  "+str);
    //function to split str into address1 and address2
    /*var url= "https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1="+ address1 +"&address2=" + address2 + " NJ";
       
    console.log("Url=="+url);
         
    axios.get(url,{
    headers:{
      "apikey": "833ffeb2822b8ee5778f7b5073319970"
    }
  })
  
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
        
      })

      .catch(err => console.log(err))*/

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
              <p onClick={this.searchHome(item.address.oneLine)}>{item.address.oneLine}</p>            
            </li>   
                
      ))}
      </ol>
      </Jumbotron>
      )
    }  
      
}
}
export default Result;