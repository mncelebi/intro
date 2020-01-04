import React, { Component } from "react";

import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

import CategoryList from './CategoryList';
import PersonsComponent from './PersonsComponent';
import PaginationComponent from './PaginationComponent';

export default class App extends Component {
  state = {suppliers: [], categories:[], cities:[], totalPageCount:[]};

  componentDidMount() {
    this.getSuppliers();
    this.getCategories();
    this.getCities();
  }

  getSuppliers = categoryId => {
    let url = "https://api.evdekibakicim.com/suppliers/list";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
  

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ suppliers: data.response.suppliers, totalPageCount: data.response.totalPageCount }))
  };


  getCategories= categoryId => {
    let url1 = "http://localhost:3000/categories";
    if (categoryId) {
      url1 += "?categoryId=" + categoryId;
    }
  

    fetch(url1)
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  };

  getCities= cityId => {
    let url2 = "http://localhost:3001/cities";
    if (cityId) {
      url2 += "?cityId=" + cityId;
    }
  

    fetch(url2)
      .then(response => response.json())
      .then(data => this.setState({ cities: data }));
  }; 

  render() {

    const pages = [];

    for (let i = 1; i <= 9; i++) {
        pages.push(i);
    }

 
    return (
      <div>
        <Container>
          <Row>
            
            <Col md="3" class=" ml-2 border ">
            <CategoryList categories={this.state.categories} cities={this.state.cities} />
            </Col>
            <div class="row ml-2 border-left "> </div>
            <Col md="9">
             <PersonsComponent
              suppliers={this.state.suppliers}
             />
            <Pagination className= "float-right mt-2">
              <PaginationItem>
                 <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="2" />
              </PaginationItem>

        {pages.map(function(item) {
            return <PaginationItem>
              <PaginationLink href="#">
                {item}
              </PaginationLink>
             </PaginationItem>;
        })}

      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
                
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
