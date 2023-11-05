import { GoTrash } from "react-icons/go";
import ExpandedPanel from "../../ui/ExpandedPanel";
import { useDeleteAlbum } from "./useDeleteAlbum";
import Button from "../../ui/Button";
import PhotosList from "../photos/PhotosList";

const AlbumListItem = ({ album }) => {
  const { deleteAlbum, isDeletingAlbum } = useDeleteAlbum();

  function handleClick() {
    deleteAlbum(album.id);
  }

  const header = (
    <>
      <Button
        loading={isDeletingAlbum}
        className="mr-2"
        onClick={handleClick}
        disabled={isDeletingAlbum}
      >
        <GoTrash />
      </Button>
      {album.name}
    </>
  );

  return (
    <ExpandedPanel header={header}>
      <PhotosList album={album} />
    </ExpandedPanel>
  );
};

export default AlbumListItem;
