import { NextFunction, Request, Response } from "express";
import { create_user } from "../database/user/create";

let users: any[] = [];

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const data = { name, email, password };
  const resData = create_user(data)
    .then(() => {
      users.push(resData);
      console.log(users);
      res.send(users).status(201);
    })
    .catch((error) => {
      console.log(error);
      res.status(404);
    });
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const id: number = parseInt(req.params.id);

  if (!id) {
    res.status(404);
  } else {
    users = users.filter((user) => user.id !== id);
    res.send(users);
  }
};

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(users);
};

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) res.send("Not Found");
  res.send(foundUser);
};

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const id: number = parseInt(req.params.id);
  const { name, lastname, age } = req.body;

  console.log(req.body);

  let user = users.find((user) => user.id === id);

  console.log(user);

  if (name && user) user.name = name;
  if (lastname && user) user.lastname = lastname;
  if (age && user) user.age = age;

  res.send(users);
};
