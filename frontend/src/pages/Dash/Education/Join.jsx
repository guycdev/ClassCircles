import React from "react";
import JoinForm from "./JoinForm";
import CreateForm from "./CreateForm";
import { motion } from "framer-motion";

export default function Join() {
  return (
    <div className="col-9 container m-0">
      <div className="row">
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
