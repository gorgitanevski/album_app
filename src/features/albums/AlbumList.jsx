import { useAddAlbum } from "./useAddAlbum";
import { useAlbums } from "./useAlbums";
import { faker } from "@faker-js/faker";
import AlbumListItem from "../albums/AlbumListItem";
import Button from "../../ui/Button";

function AlbumList({ user }) {
  const { albums, isLoading, error } = useAlbums(user?.id);
  const { addAlbum, isLoadingAlbum, error: errorAlbum } = useAddAlbum();

  function handleAddAlbum() {
    const newUser = {
      userId: user.id,
      name: faker.commerce.productName(),
    };

    addAlbum(newUser);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between mt-2">
        <h1 className="font-bold dark:text-slate-50">Albums for {user.name}</h1>
        <Button
          primary
          loading={isLoading || isLoadingAlbum}
          onClick={handleAddAlbum}
        >
          Add Album
        </Button>
      </div>
      {albums &&
        albums.map((album) => <AlbumListItem key={album.id} album={album} />)}
      {errorAlbum || (error && <div>Error with album...</div>)}
    </>
  );
}

export default AlbumList;
