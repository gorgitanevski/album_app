import Button from "../../ui/Button";
import { useAddPhoto } from "./useAddPhoto";
import { usePhotos } from "./usePhotos";
import PhotosListItem from "./PhotosListItem";
import { faker } from "@faker-js/faker";

function PhotosList({ album }) {
  const { photos, isLoading, error } = usePhotos(album.id);
  const { addPhoto, isAddingPhoto } = useAddPhoto();

  function handleClick() {
    const newPhoto = {
      albumId: album.id,
      name: faker.image.url(150, 150, true),
    };

    addPhoto(newPhoto);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h1>
          Photos for <span className="font-bold">{album.name}</span>
        </h1>
        <Button
          primary
          loading={isLoading || isAddingPhoto}
          onClick={handleClick}
        >
          Add photo
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {photos &&
          photos.map((photo) => (
            <PhotosListItem key={photo.id} photo={photo} />
          ))}
      </div>
      {error && <p>Errow fetching photos</p>}
    </>
  );
}

export default PhotosList;
