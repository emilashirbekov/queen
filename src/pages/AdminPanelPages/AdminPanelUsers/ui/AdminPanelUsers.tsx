import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import {
  selectGetUsersLoading,
  selectUsers,
} from "@/pages/AdminPanelPages/AdminPanelUsers/model/slices/usersSlice";
import {
  deleteUser,
  getUsers,
} from "@/pages/AdminPanelPages/AdminPanelUsers/api/adminUserThunk";
import { UserMinus } from "@phosphor-icons/react";
import Loader from "@/shared/ui/Loader/Loader";

export const AdminPanelUsers = () => {
  const users = useAppSelector(selectUsers);
  const loading = useAppSelector(selectGetUsersLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDelete = async (id: number) => {
    await dispatch(deleteUser(id)).unwrap();
    await dispatch(getUsers());
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60%]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1>Users</h1>
      <div className="overflow-x-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex box-border justify-between border-b py-[10px] px-[15px] border-gray-400 min-w-[1200px] w-full"
          >
            <div className="grid grid-cols-12 gap-x-2 w-full">
              <div className="grid col-span-2">
                <p>{user.username}</p>
              </div>
              <div className="grid col-span-3">
                <p className="font-bold text-gray-500">{user.email}</p>
              </div>
              <div className="grid col-span-2">
                <p>{user.phone_number}</p>
              </div>
              <div className="grid col-span-2">
                <p>{user.is_staff ? "Admin" : "User"}</p>
              </div>
              <div className="grid col-span-3">
                <p>{user.is_active ? "confirm" : "disconfirm"}</p>
              </div>
            </div>
            <button title="Удалить" onClick={() => handleDelete(user.id)}>
              <UserMinus size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
