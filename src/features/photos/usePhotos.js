import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../../services/apiPhoto";

export function usePhotos(albumId) {
  const {
    data: photos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["photos", albumId],
    queryFn: () => fetchPhotos(albumId),
  });

  return { photos, isLoading, error };
}
