import React, { Component } from "react";
import {Table,Input, Container,Row } from "reactstrap";

export default class CategoryList extends Component {

  render() {
    return (
      <div>
        <Container className="mt-4"> 
          <Row >
          <Table borderless >
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>
        <Input type="select" name="select" id="exampleSelect">
        <option>Kategori</option>
        {this.props.categories.map(category => (
                 <option> {category.text} </option>
                 ))}
          
         </Input></td>
        
        </tr>
      
        <tr>
          <th scope="row"></th>
          <td><Input type="select" name="select" id="exampleSelect1">
          <option>Şehirler</option>
          {this.props.cities.map(city => (
                 <option> {city.text} </option>
                 ))}
        </Input></td>
          
        </tr>
      </tbody>
    </Table>
          </Row>
        </Container>
       
      </div>
    );
  }
}
