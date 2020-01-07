import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import CategoryList from "./CategoryList";
import PersonsComponent from "./PersonsComponent";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as suppliersActions from "./redux/actions/suppliersActions";

class App extends Component {
  state = { cities: [], totalPageCount: [], currentPage: 1 };

  componentDidMount() {
    this.props.actions.getSuppliers(this.state.currentPage);
  }

  page = async pageId => {
    this.setState({ currentPage: pageId });
    this.props.actions.getSuppliers(this.state.currentPage);
  };

  pageIncrement = async pageId => {
    this.setState({ currentPage: pageId + 1 });
    this.props.actions.getSuppliers(this.state.currentPage);
  };

  pageDecrement = async pageId => {
    this.setState({ currentPage: pageId - 1 });
    this.props.actions.getSuppliers(this.state.currentPage);
  };

  render() {
    const pages = [];

    for (let i = 1; i <= 9; i++) {
      pages.push(i);
    }

    const paginationNext = () => this.pageIncrement(this.state.currentPage);
    const paginationPrevious = () => this.pageDecrement(this.state.currentPage);
    const pagination = page => this.page(page);

    return (
      <div>
        <Container>
          <Row>
            <Col md="3" class=" ml-2 border ">
              <CategoryList />
            </Col>
            <div class="row ml-2 border-left "> </div>
            <Col md="9">
              <PersonsComponent suppliers={this.props.suppliers} />

              <Pagination className="float-right mt-2">
                <PaginationItem>
                  <PaginationLink onClick={paginationPrevious} first />
                </PaginationItem>
                {pages.map(function(item) {
                  return (
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => {
                          pagination(item);
                        }}
                      >
                        {item}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem>
                  <PaginationLink onClick={paginationNext} last />
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    suppliers: state.suppliersListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSuppliers: bindActionCreators(suppliersActions.getSuppliers, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
