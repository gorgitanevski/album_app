import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeAlbum } from "../../services/apiAlbum";
import toast from "react-hot-toast";

export function useDeleteAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isDeletingAlbum, mutate: deleteAlbum } = useMutation({
    mutationFn: removeAlbum,
    onSuccess: () => {
      toast("Successfully deleted album", {
        icon: "❎",
      });

      queryClient.invalidateQueries({
        queryKey: ["albums"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteAlbum, isDeletingAlbum };
}
