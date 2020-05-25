import { useState, useEffect } from "react";
import localLinkStorage, { OptionalLink } from "../lib/storage";
import { ResourceNotFoundException } from "../lib/exception";

const getOptionalLink = (linkId: string) => {
  try {
    return localLinkStorage.getLink(linkId);
  } catch (ex) {
    if (ex instanceof ResourceNotFoundException) {
      return undefined;
    }
    throw ex;
  }
};

const useLink = (linkId: string): OptionalLink => {
  const [link, updateLink] = useState(undefined as OptionalLink);

  useEffect(() => {
    const handleUpdate = (newLink: OptionalLink) => {
      updateLink(newLink);
    };

    updateLink(getOptionalLink(linkId));

    return localLinkStorage.subscribeToLinkUpdates(linkId, handleUpdate);
  }, [linkId]);

  return link;
};

export default useLink;
