import React, { useEffect, useState } from "react";
import InputField from "@/shared/ui/Inputs/InputField";
import Button from "@/shared/ui/Buttons/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { selectUser } from "@/pages/AuthPage/model/slice/authSlice";
import { useNavigate } from "react-router-dom";
import {
  changePassword,
  getUserInfo,
} from "@/pages/MyRoomPage/api/personalThunk";
import { NewPassword } from "@/pages/MyRoomPage/model/types/types";
import { selectNewPasswordLoading } from "@/pages/MyRoomPage/model/slice/PersonalSlice";

const ChangePassword: React.FC = () => {
  const [state, setState] = useState<NewPassword>({
    new_password: "",
    confirming_new_password: "",
  });
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectNewPasswordLoading);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user]);

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.confirming_new_password || !state.new_password) {
      alert("Заполните все поля");
      return;
    }

    if (state.new_password === state.confirming_new_password) {
      await dispatch(changePassword(state));
      alert("Пароль изменён");
      navigate("/my-room");
    } else {
      alert("Пароли не совпадают, повторите еще раз");
    }
  };

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="w-[95%] md:container mx-auto">
      <div className="bg-secondary flex flex-col py-[40px] px-[50px] rounded-[30px] mt-[30px] md:mt-[123px] gap-y-[40px]">
        <div className="col-span-4 md:col-span-3">
          <div className="flex flex-col gap-y-[24px]">
            <h4 className="font-semibold text-[15px]">Изменить пароль</h4>
            <form onSubmit={submitFormHandler} className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[24px] gap-x-3">
                <InputField
                  name="new_password"
                  value={state.new_password}
                  onChange={inputChangeHandler}
                  typeField="defoult"
                  type="text"
                  placeholder="Новый пароль"
                />
                <InputField
                  name="confirming_new_password"
                  typeField="defoult"
                  type="text"
                  value={state.confirming_new_password}
                  onChange={inputChangeHandler}
                  placeholder="Повторите пароль"
                />
              </div>
              <div className="flex justify-end mt-[32px]">
                <Button
                  type="submit"
                  style="w-full md:w-[50%]"
                  typeButton="contained"
                  disabled={loading}
                >
                  Сохранить
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
