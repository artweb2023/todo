import { Task } from "../model/types";
import { generateRandomId } from "./generateRandomId";

function getTask(text: string): Task {
  return {
    id: generateRandomId(),
    text: text,
    isCompleted: false,
  };
}

export { getTask };
