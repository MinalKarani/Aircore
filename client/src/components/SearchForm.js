import React from "react";
import Jumbotron from "./Jumbotron";

function SearchForm(props) {
  return (
    <Jumbotron>
    <form>
 
    <legend>Search Flights</legend>
    
    <div class="form-group">
      <label for="exampleSelect1">Flying from Source</label>
      <select class="form-control" id="exampleSelect1">
        <option>New Jersey</option>
        <option>New York</option>
        <option>Texas</option>
        <option>Florida</option>
        <option>California</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleSelect2">Flying to Destination</label>
      <select class="form-control" id="exampleSelect1">
        <option>New Jersey</option>
        <option>New York</option>
        <option>Texas</option>
        <option>Florida</option>
        <option>California</option>
      </select>
    </div>
    <div class="form-group">
      <label for="departing">Departing</label>
      <input type="date" class="form-control-file" id="departing" aria-describedby="Departing"></input>
    </div>
    <div class="form-group">
      <label for="returning">Returning</label>
      <input type="date" class="form-control-file" id="returning" aria-describedby="Returning"></input>
      
    </div>
    <div class="form-group">
      <label for="travellers">Travellers</label>
      <input type="text" class="form-control-file" id="travellers" aria-describedby="Travellers"></input>
      
    </div>    
    <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
      Search
    </button>
</form>
</Jumbotron>
  );
}

export default SearchForm;
