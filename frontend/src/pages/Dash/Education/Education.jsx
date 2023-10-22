import React from "react";
import JoinForm from "./JoinForm";
import CreateForm from "./CreateForm";
import { useLoaderData, redirect } from "react-router-dom";

export async function loader() {
  try {
    const req = await fetch(
      "http://ec2-184-73-129-175.compute-1.amazonaws.com:3003/groups/eduGroups"
    );
    console.log(req);
    const data = await req.json();
    if (!req.ok) {
      return redirect("../sign-in");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
export default function Join() {
  const data = useLoaderData();

  return (
    <div className="col-9 container ">
      <div className="row gap-4 gap-xxl-0 ">
        <JoinForm
          title="Join Group"
          subheading="Fill out the form to find the right group for you"
          data={data}
        />
        <CreateForm
          title="Create Group"
          subheading="Create your own group by filling out the form below"
        />
      </div>
    </div>
  );
}
