import React from "react";
import {
  FilteredSearch,
  Dropdown,
  TextInput,
  Avatar,
  Text,
  Box,
} from "@primer/components";
import { SearchIcon } from "@primer/octicons-react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { getRepositoryIssues } from "../queries";
import { RepositoryRouteParams } from "../types";

const Browser = () => {
  const { owner, name } = useParams<RepositoryRouteParams>();

  const { data, loading, error } = useQuery(getRepositoryIssues, {
    variables: {
      name,
      owner,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("data", data);
  console.log("error", error);

  return (
    <>
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
      {data?.repository?.issues?.nodes?.map((node: any) => {
        console.log(node);

        return (
          <Box>
            <Link to={`/${owner}/${name}/${node.number}`}>
              <Avatar src={node.author.avatarUrl} />
              <Text>{node.author.login}</Text>
              <Text>{node.title}</Text>
            </Link>
          </Box>
        );
      })}
    </>
  );
};

export default Browser;
