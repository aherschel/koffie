import { useState, useEffect } from "react";
import localLinkStorage, { OptionalLink } from "../lib/storage";
import { Checkpoint } from "../lib/model";
import { ResourceNotFoundException } from "../lib/exception";

const getOptionalLinkCheckpoints = (linkId: string) => {
  try {
    const link = localLinkStorage.getLink(linkId);
    return link.checkpoints;
  } catch (ex) {
    if (ex instanceof ResourceNotFoundException) {
      return [];
    }
    throw ex;
  }
};

const useCheckpoints = (linkId: string): Checkpoint[] => {
  const [checkpoints, setCheckpoints] = useState([] as Checkpoint[]);

  useEffect(() => {
    const handleUpdate = (newLink: OptionalLink) => {
      if (newLink === undefined) {
        setCheckpoints([]);
      } else {
        setCheckpoints(newLink.checkpoints);
      }
    };

    setCheckpoints(getOptionalLinkCheckpoints(linkId));

    return localLinkStorage.subscribeToLinkUpdates(linkId, handleUpdate);
  }, [linkId]);

  return checkpoints;
};

export default useCheckpoints;
