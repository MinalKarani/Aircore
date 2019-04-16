import React,{ Component } from "react";
import Jumbotron from "./Jumbotron";
import axios from "axios";

class SearchForm extends Component {
  
  state = {
    
    country: "",
    category: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  

  handleFormSubmit = event => {
    event.preventDefault();
    
    console.log(this.state.country);
    console.log(this.state.category);
    var newCountry=this.state.country;
    var countryStr1=newCountry.split('(');
    var countryStr=countryStr1[1].split(')');
    console.log("countryStr=="+countryStr[0]);
    var url = "https://newsapi.org/v2/top-headlines?country="+countryStr[0]+"&category="+this.state.category+"&apiKey=812ef34128434c998897df67e51cd878";
    console.log("Url=="+url);
    axios.get(url).then(response => {
      console.log(response);
    })
  };
render() {
  return (
    <Jumbotron>
    <form>
 
    <legend>Search News</legend>
    
    <div class="form-group">
      <label for="country">Country</label>
      <select class="form-control" id="country"
       value={this.state.country}
       onChange={this.handleInputChange}
       name="country"
      >
        <option>USA</option>
        <option>INDIA(IN)</option>
        <option>UK(GB)</option>
        <option>CANADA</option>
        <option>AUSTRALLIA</option>
      </select>
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <select class="form-control" id="category"
      value={this.state.category}
      onChange={this.handleInputChange}
      name="category"
      >
        <option>Technology</option>
        <option>Politics</option>
        <option>Sports</option>
        <option>Health</option>
        <option>Business</option>
        <option>Entertainment</option>
        <option>Science</option>
      </select>
    </div>
    
    <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
      Search
    </button>
</form>
</Jumbotron>
  );
}
}
export default SearchForm;
