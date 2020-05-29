import React from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import { Checkpoint } from "../lib/model";

const groups = [{ id: 1, title: "Friend 1" }];

const convertCheckpointsToItems = (checkpoints: Checkpoint[]) => {
  return checkpoints.map((checkpoint, id) => {
    return {
      id,
      group: 1,
      title: "Checkpoint",
      start_time: moment(checkpoint.date.valueOf()).startOf("day"),
      end_time: moment(checkpoint.date.valueOf()).endOf("day"),
    };
  });
};

interface CheckpointCalendarProps {
  checkpoints: Checkpoint[];
}

const CheckpointCalendar = (props: CheckpointCalendarProps) => {
  const { checkpoints } = props;
  return (
    <div>
      <h3>Checkpoint Calendar</h3>
      <Timeline
        groups={groups}
        items={convertCheckpointsToItems(checkpoints)}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
};

export default CheckpointCalendar;
