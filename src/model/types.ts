type Task = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type TaskModel = {
  tasks: Array<Task>;
};

export type { Task, TaskModel };
