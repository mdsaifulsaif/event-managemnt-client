import React from "react";
import { useLoaderData } from "react-router";

function EventDetails() {
  const event = useLoaderData();
  console.log(event);
  return <div>EventDetails</div>;
}

export default EventDetails;
