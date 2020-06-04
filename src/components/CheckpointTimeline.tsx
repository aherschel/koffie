import React from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment, { Moment } from "moment";
import { Link } from "../lib/model";

interface TimelineGroup {
  id: string;
  title: string;
}

const convertLinksToGroups = (links: Link[]): TimelineGroup[] => {
  return links.map((link) => {
    return {
      id: link.id as string,
      title: link.name,
    };
  });
};

interface TimelineItem {
  id: string;
  group: string;
  title: string;
  start_time: Moment;
  end_time: Moment;
}

const convertLinksToItems = (links: Link[]): TimelineItem[] => {
  return links.flatMap((link) => {
    return link.checkpoints.map((checkpoint) => {
      return {
        id: checkpoint.id,
        group: link.id as string,
        title: "Checkpoint",
        start_time: moment(checkpoint.date.valueOf()).startOf("day"),
        end_time: moment(checkpoint.date.valueOf()).endOf("day"),
      };
    });
  });
};

interface CheckpointCalendarProps {
  links: Link[];
}

const CheckpointTimeline = (props: CheckpointCalendarProps) => {
  const { links } = props;
  const groups = convertLinksToGroups(links)
  const items = convertLinksToItems(links)
  if (groups.length === 0 || items.length === 0) {
    return null;
  }
  return (
    <div>
      <h3>Checkpoint Calendar</h3>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-2, "day")}
        defaultTimeEnd={moment().add(12, "day")}
      />
    </div>
  );
};

export default CheckpointTimeline;
