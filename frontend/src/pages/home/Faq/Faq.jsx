import React, { useState } from "react";
import Accordion from "../../../components/Accordion";
import create from "../../../assets/misc/create.svg";
import join from "../../../assets/misc/join.svg";
import list from "../../../assets/misc/list.svg";
import number from "../../../assets/misc/number.svg";
import plus from "../../../assets/misc/plus.svg";
import report from "../../../assets/misc/report.svg";
import safe from "../../../assets/misc/safe.svg";

export default function Faq() {
  const [id, setId] = useState(0);

  return (
    <section className="container" id="faq">
      <div className="row justify-content-center my-3 gap-3 gap-md-0">
        <div className="col-12 col-md-6 ">
          <Accordion
            type={join}
            setId={setId}
            id={id}
            label={0}
            heading="How do I join a study group?"
            content="To join a study group, simply fill out the form with your preferences and a list of suitable study groups will be displayed. You can then select the group you want to join."
          />
        </div>
        <div className="col-12 col-md-6 ">
          <Accordion
            setId={setId}
            type={create}
            id={id}
            label={1}
            heading="Can I create my own group?"
            content="Yes, you have the option to create your own study group or hobby circle. Just click on the 'Create Group' button and follow the steps."
          />
        </div>
      </div>
      <div className="row justify-content-center my-3 gap-3 gap-md-0">
        <div className="col-12 col-md-6 ">
          <Accordion
            setId={setId}
            type={number}
            id={id}
            label={2}
            heading="Is there a limit to how many groups I can join?"
            content="As of now, there is no limit to the number of groups you can join. However, we encourage you to only join groups you are genuinely interested in."
          />
        </div>
        <div className="col-12 col-md-6 ">
          <Accordion
            setId={setId}
            id={id}
            label={3}
            type={safe}
            heading="How are group members vetted?"
            content="Currently, group members are not vetted. However, group admins have the authority to remove members if necessary."
          />
        </div>
      </div>
      <div className="row justify-content-center my-3 gap-3 gap-md-0">
        <div className="col-12 col-md-6 ">
          <Accordion
            setId={setId}
            type={list}
            id={id}
            label={4}
            heading="What kinds of hobbies can I find?"
            content="You can find a wide range of hobbies from sports, cooking, coding, to music and arts. Just fill out your interests in the form and suitable groups will be suggested."
          />
        </div>
        <div className="col-12 col-md-6 ">
          <Accordion
            setId={setId}
            id={id}
            label={5}
            type={report}
            heading="How do I report inappropriate behavior?"
            content="If you encounter any inappropriate behavior, you can report it to the group admin or directly to us through the 'Report' button on the platform."
          />
        </div>
      </div>
    </section>
  );
}
