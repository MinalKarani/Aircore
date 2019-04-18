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
  
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
     // flag:true
    });
  };
  

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      
      flag:true
    });
    
    var url = "https://api.estated.com/property/v3?token=EeGfiyigKeWeKFbdaSzo14IJL6le26&address="+this.state.address+"&city="+this.state.city+"&state=NJ";
    console.log("Url=="+url);
    axios.get(url).then(response => {
      
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
      });
     })
     
     
  };
render() {
  return (
    <Jumbotron>
    
 
    <legend>Search Property</legend>
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
  
    <Result flagg={this.state.flag}
            add={this.state.address}
            county={this.state.county}
            school={this.state.school}
            price={this.state.price}
            building_type={this.state.building_type}
            finished_size={this.state.finished_size}
            year_built={this.state.year_built}

    />    
</form>
</Jumbotron>
  );
}
}
export default SearchForm;
