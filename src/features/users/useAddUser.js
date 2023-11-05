import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUsers } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useAddUser() {
  const queryClient = useQueryClient();

  const { mutate: addUser, isPending: isAddingUser } = useMutation({
    mutationFn: addUsers,
    onSuccess: () => {
      toast.success("Successfully added user");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isAddingUser, addUser };
}
