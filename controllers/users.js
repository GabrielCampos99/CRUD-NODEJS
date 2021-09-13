import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const postUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`username ${user.firstName} add to database`);
};

export const getUser = (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user deleted : ${id}`);
};

export const pathUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User editado com id: ${id}`);
};
