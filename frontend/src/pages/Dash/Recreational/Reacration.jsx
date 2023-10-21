import React from "react";
import JoinForm from "./JoinForm";
import CreateForm from "./CreateForm";

export default function Recreation() {
  return (
    <div className="col-9 container ">
      <div className="row gap-4 gap-xxl-0 justify-content-center">
        <JoinForm
          title="Join Group"
          subheading="Fill out the form to find the right group for you"
        />
        <CreateForm
          title="Create Group"
          subheading="Create your own group by filling out the form below"
        />
      </div>
    </div>
  );
}
