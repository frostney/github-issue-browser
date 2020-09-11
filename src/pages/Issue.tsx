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

import { IssueRouteParams } from "../types";
import { getIssue } from "../queries";
import { Comment } from "../components";

const Issue = () => {
  const { owner, name, id } = useParams<IssueRouteParams>();

  const { data, loading, error } = useQuery(getIssue, {
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
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item
            href={`/${owner}/${name}`}
          >{`${owner}/${name}`}</Breadcrumb.Item>
          <Breadcrumb.Item selected>{`#${id}`}</Breadcrumb.Item>
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
            <Comment
              avatar={node.author.avatarUrl}
              login={node.author.login}
              body={node.bodyHTML}
            />
          );
        })}
      </Timeline>
    </>
  );
};

export default Issue;
