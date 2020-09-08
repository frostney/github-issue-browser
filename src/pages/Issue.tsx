import React from "react";

import {
  Heading,
  Pagehead,
  Breadcrumb,
  Text,
  Avatar,
  Timeline,
  BorderBox,
} from "@primer/components";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ISSUE } from "../queries";

interface RouteParams {
  owner: string;
  name: string;
  id: string;
}

const Issue = () => {
  const { owner, name, id } = useParams<RouteParams>();

  const { data, loading, error } = useQuery(GET_ISSUE, {
    variables: {
      name,
      owner,
      id: Number(id),
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);
  console.log(error);

  return (
    <>
      <Pagehead>
        <Breadcrumb>
          <Breadcrumb.Item href="#business">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#customers">{`${owner}/${name}`}</Breadcrumb.Item>
          <Breadcrumb.Item href="#mailchimp" selected>
            {`#${id}`}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Heading fontSize={2}>{data.repository.issue.title}</Heading>
      </Pagehead>
      <BorderBox>
        <Avatar src={data.repository.issue.author.avatarUrl} />
        <Text fontWeight="bold">{data.repository.issue.author.login}</Text>
        <Text
          dangerouslySetInnerHTML={{ __html: data.repository.issue.bodyHTML }}
        />
      </BorderBox>
      <Timeline>
        {data.repository.issue.comments.nodes.map((node: any) => {
          return (
            <Timeline.Item>
              <Timeline.Badge>
                <Avatar src={node.author.avatarUrl} />
              </Timeline.Badge>
              <Timeline.Body>
                <Text fontWeight="bold">{node.author.login}</Text>
                <Text dangerouslySetInnerHTML={{ __html: node.bodyHTML }} />
              </Timeline.Body>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </>
  );
};

export default Issue;
