import React,{ Component } from "react";
import Jumbotron from "./Jumbotron";
import { Input, TextArea, FormBtn } from "./Form";
import axios from "axios";
import FirstPage from "../pages/FirstPage";
import NoMatch from "../pages/NoMatch";
import Result from "../pages/Result";
import { Link } from "react-router-dom";

class SearchForm extends Component {
  
  state = {
    
    address: "",
    county: "",
    flood:"",
    school:"",
    price:0,
    building_type:"",
    finished_size:0,
    year_built:0,
    flag:false,
    ZIP:""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
     
    });
  };
  

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      
      flag:true
    });

    
    var url= "https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1="+this.state.address+"&address2="+this.state.city+" NJ"
    
    console.log("Url=="+url);
    axios.get( url,{
      headers: {
        "apikey": "833ffeb2822b8ee5778f7b5073319970"
      }
    }).then(response => {
      console.log("response:  "+ JSON.stringify(response))
      /*
      console.log("Address:  "+response.data.properties[0].addresses[0].formatted_street_address);
      console.log("Address:  "+response.data.properties[0].addresses[0].city);
      console.log("Address:  "+response.data.properties[0].addresses[0].state);
      console.log("Address:  "+response.data.properties[0].addresses[0].zip_code);
      console.log("County:  "+response.data.properties[0].geographies.county.name);

      this.setState({
        address:response.data.properties[0].addresses[0].formatted_street_address + " " + response.data.properties[0].addresses[0].city+" " + response.data.properties[0].addresses[0].state + " " + response.data.properties[0].addresses[0].zip_code,
        county:response.data.properties[0].geographies.county.name,
        //flood:response.data.properties[0].flood.annual_flood_risk,
        school:response.data.properties[0].geographies.school_elementary.name,
        price:response.data.properties[0].sales[0].price,
        building_type:response.data.properties[0].structures[0].building_type,
        finished_size:response.data.properties[0].structures[0].finished_size,
        year_built:response.data.properties[0].structures[0].year_built
      });*/
     })
     
     
  };
  handleZipFormSubmit = event => {
    event.preventDefault();
    this.setState({
      
      flag:true
    });

    var url= "https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?postalcode=08817&page=1&pagesize=10"
    
    console.log("Url=="+url);
    axios.get( url,{
      headers: {
        "apikey": "833ffeb2822b8ee5778f7b5073319970"
      }
    }).then(response => {
      console.log("response:  "+ JSON.stringify(response))
    }) 
  };

render() {
  if(!this.state.flag)
  {
    return (
      <Jumbotron>
      
   
      <legend>Search Property By Address</legend>
      <form>
      <div class="form-group">
        <label for="address">Address</label>
            <Input
              value={this.state.address}
              onChange={this.handleInputChange}
              name="address"
              placeholder="Address (Optional)"
            />
      </div>
      <div class="form-group">
      <label for="city">City</label>
      <Input
            value={this.state.city}
            onChange={this.handleInputChange}
            name="city"
            placeholder="City (required)"
          />
      </div>
      <div class="form-group">
        <label for="place">State</label>
        <select class="form-control" id="place"
         value={this.state.place}
         onChange={this.handleInputChange}
         name="place"
        >
          <option>NJ</option>
          <option>NY</option>
          <option>CA</option>
          <option>MD</option>
          <option>VA</option>
        </select>
      </div>   
      
      <FormBtn onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
       Search
      </FormBtn>
      </form>

      <p>OR</p>
      <legend>Search Property By Zip Code</legend>
      <form>
      <div class="form-group">
        <label for="ZIP">Zip Code</label>
            <Input
              value={this.state.ZIP}
              onChange={this.handleInputChange}
              name="ZIP"
              placeholder="Enter ZIP CODE (Required)"
            />
      </div>
      <FormBtn onClick={this.handleZipFormSubmit} className="btn btn-primary mt-3">
       Search By ZIP
      </FormBtn>
      </form>
    </Jumbotron>
  );
  }
  else{
    return(
      <Result flagg={this.state.flag}
            add={this.state.address}
            county={this.state.county}
            school={this.state.school}
            price={this.state.price}
            building_type={this.state.building_type}
            finished_size={this.state.finished_size}
            year_built={this.state.year_built}

    />    
    )
  }
  
    

}
}
export default SearchForm;
