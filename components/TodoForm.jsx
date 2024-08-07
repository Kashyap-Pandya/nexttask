"use client";
import { createTask } from "@/utils/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  message: null,
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Creating..." : "Create Task"}
    </button>
  );
};

const TodoForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);
  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.message) {
      toast.success("Task Created");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="todo"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TodoForm;
