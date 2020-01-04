import React, { Component } from 'react'
import {Container,Row, Card,  CardSubtitle, CardBody, CardText, Badge} from "reactstrap";

export default class PersonsComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                {this.props.suppliers.map(supplier => (
                  <Row className="mt-4">
                    <Card style={{ width: "100%"}} className="pl-3 pr-3">
                      <Row>
                        <CardBody className="col-2">
                          <img src={supplier.photoUrl}  className="img-fluid rounded shadow" />
                        </CardBody>
                        
                        <CardBody className="col-7">
                          <h3 className="font-weight-bold font-size-2">{supplier.name}</h3>
                          <CardSubtitle>{supplier.locationText}</CardSubtitle>
                          <div className="mt-3">
                            <Badge href="#" color="secondary" className="mr-2">{supplier.referenceCount} Referans</Badge>
                <Badge href="#" color="secondary" className="mr-2">{supplier.reviewCount} Yorum</Badge>
                          </div>
                        </CardBody>
                        
                        <CardBody className="col-3 text-right">
                          <CardText className="mb-0">{supplier.wageRangeText} TL</CardText>
                          <CardText>({supplier.wageTypeText})</CardText>
                        </CardBody>
                      </Row>
                    </Card>
                  </Row>
                ))}
                  
                </Container>
            </div>
        )
    }
}