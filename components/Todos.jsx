import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/action";

const Todos = async () => {
  const tasks = await getAllTasks();
  // console.log((await tasks).length === 0, "task");
  if ((await tasks).length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg text-center">No tasks to show</h2>
    );
  }
  return (
    <div>
      <ul>
        {(await tasks).map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center px-6 py-4 mb-4 border border-teal-300  rounded-lg "
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? `line-through` : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link href={`/todo/${task.id}`} className="btn btn-accent btn-xs">
                edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
