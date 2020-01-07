import React, { Component } from "react";
import { Table, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "./redux/actions/categoryActions";
import * as cityActions from "./redux/actions/cityActions";
import * as suppliersActions from "./redux/actions/suppliersActions";

const Dropdown = props => {
  const { items, onItemSelect, cities, onCitySelect } = props;

  return (
    <React.Fragment>
      <select id="genres" className="dropdown" onChange={onItemSelect}>
        <option>Kategoriler</option>
        {items &&
          items.map(item => {
            return (
              <option
                key={item.categoryId}
                className="dropdown__option"
                value={item.categoryId}
              >
                {item.text}
              </option>
            );
          })}
      </select>

      <select id="genres1" className="dropdown" onChange={onCitySelect}>
        <option>Şehirler</option>
        {cities &&
          cities.map(cities => {
            return (
              <option
                key={cities.cityId}
                className="dropdown__option"
                value={cities.cityId}
              >
                {cities.text}
              </option>
            );
          })}
      </select>
    </React.Fragment>
  );
};

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
    this.props.actions.getCities();
    this.props.actions.getSuppliersByCategory();
    this.props.actions.getSuppliersByCity();
  }

  handleGenreSelect = e => {
    e.persist();
    const categoryId = e.target.value;
    this.props.actions.getSuppliersByCategory(categoryId);
  };

  handleGenreSelect1 = e => {
    e.persist();
    const cityId = e.target.value;
    this.props.actions.getSuppliersByCity(cityId);
  };

  render() {
    return (
      <div>
        <Container className="mt-4">
          <Row>
            <Table borderless>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>
                    {!!this.props.categories && (
                      <Dropdown
                        items={this.props.categories}
                        onItemSelect={this.handleGenreSelect}
                        cities={this.props.cities}
                        onCitySelect={this.handleGenreSelect1}
                      />
                    )}
                  </td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoriesListReducer,
    cities: state.citiesListReducer,
    suppliers: state.suppliersListByCategoryReducer,
    suppliers1: state.suppliersListByCityReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      getCities: bindActionCreators(cityActions.getCities, dispatch),

      getSuppliersByCategory: bindActionCreators(
        suppliersActions.getSuppliersByCategories,
        dispatch
      ),
      getSuppliersByCity: bindActionCreators(
        suppliersActions.getSuppliersByCities,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
