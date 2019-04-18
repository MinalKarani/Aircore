import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { ListItem,List } from "../components/List";

export function Result(props) {
    if(props.flagg)
    {
      return(
        <Jumbotron> 
          <legend>Results</legend>  

          <List>
          <ListItem>
            
            Address:
            <span>{props.add}</span>
            
          </ListItem>
          <ListItem>
            
          County:
          <span>{props.county}</span>
            
          </ListItem>
         
          <ListItem>
          School:
          <span>{props.school}</span>
         </ListItem>
         <ListItem>
          price:
          <span>{props.price}</span>
          </ListItem>
          <ListItem>
          building_type:
          <span>{props.building_type}</span>
          </ListItem>
          <ListItem>
          Finished Size:
          <span>{props.finished_size}</span>
          </ListItem>
          <ListItem>
          year_built:
          <span>{props.year_built}</span>
          </ListItem>
          </List>

         
        </Jumbotron>
        )
      }
      else
      {
        return null;
      }
}

export default Result;