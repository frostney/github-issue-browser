import React from "react";
import { FilteredSearch, Dropdown, TextInput } from "@primer/components";
import { SearchIcon } from "@primer/octicons-react";
import { useParams } from "react-router-dom";

interface RouteParams {
  owner: string;
  repo: string;
}

const Browser = () => {
  let { owner, repo } = useParams<RouteParams>();

  console.log(owner, repo);

  return (
    <FilteredSearch>
      <Dropdown>
        <Dropdown.Button>Filter</Dropdown.Button>
        <Dropdown.Menu direction="sw">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <TextInput icon={SearchIcon} />
    </FilteredSearch>
  );
};

export default Browser;
