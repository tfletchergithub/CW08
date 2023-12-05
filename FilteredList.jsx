import React, { Component } from 'react';
import {DropdownButton} from 'react-bootstrap';
import List from './List';
import './App.css';
class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      selectedType: "all" // Initialize with 'all' as default type
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  filterItem = (item) => {
    const { selectedType, search } = this.state;
    const isMatchedType = selectedType === "all" || item.type === selectedType;
    const isMatchedSearch = item.name.toLowerCase().includes(search);
    return isMatchedType && isMatchedSearch;
  };

  handleTypeSelect = (eventKey) => {
    this.setState({ selectedType: eventKey });
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        {/* DropdownButton for types */}
        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.handleTypeSelect}>
         
        </DropdownButton>

        {/* Search input */}
        <input type="text" placeholder="Search" onChange={this.onSearch} />

        {/* List component */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
