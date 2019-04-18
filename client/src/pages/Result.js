import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { ListItem,List } from "../components/List";

export function Result(props) {
    if(props.flagg)
    {
      return(
        <Jumbotron> 
          <legend>Results</legend>  
          <p>
            Address:
          <span>{props.add}</span>
          </p>

          <p>
            County:
          <span>{props.county}</span>
          </p>
          <p>
          School:
          <span>{props.school}</span>
          </p>
          <p>
          price:
          <span>{props.price}</span>
          </p>
          <p>
          building_type:
          <span>{props.building_type}</span>
          </p>
          <p>
          Finished Size:
          <span>{props.finished_size}</span>
          </p>
          <p>
          year_built:
          <span>{props.year_built}</span>
          </p>
        </Jumbotron>
        )
      }
      else
      {
        return null;
      }
}

export default Result;