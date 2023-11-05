import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "../../services/apiAlbum";

export function useAlbums(userId) {
  const {
    data: albums,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["albums", userId],
    queryFn: () => fetchAlbums(userId),
  });

  return { albums, isLoading, error };
}
