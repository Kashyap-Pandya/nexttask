import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/action";
import Link from "next/link";

const SingleTodoPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mx-12 ">
        <Link href="/todo" className="btn btn-accent btn-sm">
          Back
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default SingleTodoPage;
