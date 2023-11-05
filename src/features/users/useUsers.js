import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/apiUser";

export function useUsers() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return { users, isLoading, error };
}
