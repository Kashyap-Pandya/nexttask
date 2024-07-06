"use server";
import z from "zod";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const createTask = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/todo");
    return {
      message: "Success",
      status: 200,
    };
  } catch (error) {
    return {
      message: error.errors[0]?.message || "Error!",
      status: 400,
    };
  }

  // console.log(formData);
  // console.log(content);
};

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/todo");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on",
    },
  });
  redirect("/todo");
};
