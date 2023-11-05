import axios from "axios";

async function fetchUsers() {
  const res = await axios.get("http://localhost:3005/users");

  return res.data;
}

async function addUsers(newUser) {
  const res = await axios.post("http://localhost:3005/users", newUser);

  return res.data;
}

async function deleteUser(userId) {
  try {
    const res = await axios.delete(`http://localhost:3005/users/${userId}`);
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export { fetchUsers, addUsers, deleteUser };
