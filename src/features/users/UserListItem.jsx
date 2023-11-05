import AlbumList from "../albums/AlbumList";
import ExpandedPanel from "../../ui/ExpandedPanel";
import { GoTrash } from "react-icons/go";
import { useDeleteUser } from "./useDeleteUser";
import Button from "../../ui/Button";

function UserListItem({ user }) {
  const { deleteUser, isDeleting } = useDeleteUser();

  function handleClick() {
    deleteUser(user.id);
  }

  const header = (
    <>
      <Button loading={isDeleting} onClick={handleClick} className="mr-2">
        <GoTrash />
      </Button>
      {user.name}
    </>
  );

  return (
    <div>
      <ExpandedPanel header={header}>
        <AlbumList user={user} />
      </ExpandedPanel>
    </div>
  );
}

export default UserListItem;
