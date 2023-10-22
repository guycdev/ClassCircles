import React from "react";
import JoinForm from "./JoinForm";
import CreateForm from "./CreateForm";
import { useLoaderData, redirect } from "react-router-dom";

export async function loader() {
  try {
    const req = await fetch("http://127.0.0.1:5173/groups/recreation");
    const data = await req.json();
    if (!userRequest.ok) {
      return redirect("../account");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default function Recreation() {
  const data = useLoaderData();
  return (
    <div className="col-9 container ">
      <div className="row gap-4 gap-xxl-0 justify-content-center">
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
