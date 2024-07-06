import prisma from "@/utils/db";

const getAllTasks = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "buy brocoli",
  //   },
  // });
  // await prisma.task.update({
  //   where: {
  //     id: "1f1cda13-92a6-47f4-832b-9d37e402601e",
  //   },
  //   data: {
  //     content: "buy brocoli completed",
  //   },
  // });

  // await prisma.task.delete({
  //   where: {
  //     id: "1f1cda13-92a6-47f4-832b-9d37e402601e",
  //   },
  // });
  const allTasks = await prisma.task.findMany();
  return allTasks;
};

const Prisma = async () => {
  const tasks = await getAllTasks();
  return (
    <div>
      <h1 className="text-7xl">Tasks</h1>
      {tasks.map((task) => (
        <h2 key={task.id} className="text-xl py-2">
          {task.content}
        </h2>
      ))}
    </div>
  );
};
export default Prisma;
