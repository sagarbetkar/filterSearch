import React from "react";
import { Card } from "antd";

export function UserCardContainer({
  user: { _id, name, avatar, gender, age, shirtSize, price }
}: any) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={_id} src={avatar} />}
      >
        <p>{name}</p>
        <p>{age}</p>
        <p>{gender}</p>
        <p>{shirtSize}</p>
        <p>{price}</p>
      </Card>
    </div>
  );
}
