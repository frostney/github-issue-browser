import React from "react";
import { Text, Avatar, Timeline } from "@primer/components";

interface Props {
  avatar: string;
  login: string;
  body: string;
}

const Comment = ({ avatar, login, body }: Props) => (
  <Timeline.Item>
    <Timeline.Badge>
      <Avatar src={avatar} />
    </Timeline.Badge>
    <Timeline.Body>
      <Text fontWeight="bold">{login}</Text>
      <Text dangerouslySetInnerHTML={{ __html: body }} />
    </Timeline.Body>
  </Timeline.Item>
);

export default Comment;
