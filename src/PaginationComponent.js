import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'


export default class PaginationComponent extends Component {

    
    render() {
        const pages = [];

        for (let i = 1; i <= 9; i++) {
            pages.push(i);
        }
        return (

        
            <div>
    <Pagination className= "float-right mt-2">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="2" />
      </PaginationItem>

        {pages.map(function(item) {
            return <PaginationItem>
            <PaginationLink onClick = {() => pages } href="#">
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
                
            </div>
        )
    }
}
