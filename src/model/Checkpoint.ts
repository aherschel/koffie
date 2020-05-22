import { Guid } from "guid-typescript";

export default interface Checkpoint {
  id: string;
}

export const createCheckpoint = (): Checkpoint => {
  return { id: Guid.create().toString() };
};
