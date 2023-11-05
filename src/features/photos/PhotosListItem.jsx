import { GoSync, GoTrash } from "react-icons/go";
import { useRemovePhoto } from "./useRemovePhoto";

function PhotosListItem({ photo }) {
  const { deletePhoto, isDeletingPhoto } = useRemovePhoto();

  function handleClick() {
    deletePhoto(photo.id);
  }

  if (isDeletingPhoto) return <GoSync className="animate-spin" size={24} />;

  return (
    <div onClick={handleClick} className="relative cursor-pointer m-2">
      <img src={photo.name} alt="photos" className="w-24" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 text-xl hover:opacity-80 dark:text-black">
        <GoTrash />
      </div>
    </div>
  );
}

export default PhotosListItem;
