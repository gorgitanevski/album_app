import { faker } from "@faker-js/faker";
import Button from "../../ui/Button";
import UserListItem from "./UserListItem";
import { useUsers } from "./useUsers";
import { useAddUser } from "./useAddUser";
import DarkModeToogle from "../../ui/DarkModeToogle";

export default function UserList() {
  const { addUser, isAddingUser } = useAddUser();
  const { users, isLoading, error } = useUsers();

  if (error) return "errow with fetch users";

  function handleAddUser() {
    const newUser = {
      name: faker.internet.userName(),
    };
    addUser(newUser);
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center py-3">
        <div className="flex flex-row items-center gap-3">
          <h1 className="dark:text-slate-100">Users</h1>
          <DarkModeToogle />
        </div>
        <Button
          primary
          loading={isLoading || isAddingUser}
          onClick={handleAddUser}
        >
          Add user
        </Button>
      </div>
      {users && users.map((user) => <UserListItem key={user.id} user={user} />)}
    </>
  );
}
