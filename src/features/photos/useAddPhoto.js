import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPhoto as addPhotoApi } from "../../services/apiPhoto";
import toast from "react-hot-toast";

export function useAddPhoto() {
  const queryClient = useQueryClient();

  const { mutate: addPhoto, isPending: isAddingPhoto } = useMutation({
    mutationFn: addPhotoApi,
    onSuccess: (album) => {
      queryClient.invalidateQueries({ queryKey: ["photos", album.albumId] });
      toast.success("Successfully added photo");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addPhoto, isAddingPhoto };
}
