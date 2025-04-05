"use client";

import { GetUsersDocument } from "@repo/shared/generated/graphql";
import { useQuery } from "@apollo/client";
import React from "react";

export default function Home() {
  const { data, loading, error } = useQuery(GetUsersDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>{data?.users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
