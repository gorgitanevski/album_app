import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAlbum as addAlbumApi } from "../../services/apiAlbum";
import toast from "react-hot-toast";

export function useAddAlbum() {
  const queryClient = useQueryClient();

  const {
    mutate: addAlbum,
    isPending: isLoadingAlbum,
    error,
  } = useMutation({
    mutationFn: addAlbumApi,
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: ["albums", user.userId] });
      toast.success("Successfully added album");
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { addAlbum, isLoadingAlbum, error };
}
