import { nanoid } from "nanoid";

export const defaultField = () => ({
  id: nanoid(),
  key: "",
  type: "string",
});
