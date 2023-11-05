import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removePhoto } from "../../services/apiPhoto";
import toast from "react-hot-toast";

export function useRemovePhoto() {
  const queryClient = useQueryClient();

  const { mutate: deletePhoto, isPending: isDeletingPhoto } = useMutation({
    mutationFn: removePhoto,
    onSuccess: () => {
      toast.success("Successfully deleted photo", {
        icon: "❎",
      });

      queryClient.invalidateQueries({ queryKey: ["photos"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deletePhoto, isDeletingPhoto };
}
