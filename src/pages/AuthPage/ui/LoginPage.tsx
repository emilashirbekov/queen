import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import InputField from "@/shared/ui/Inputs/InputField";
import Button from "@/shared/ui/Buttons/Button";
import { LoginMutation } from "@/pages/AuthPage/model/types/LoginModel";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { login } from "@/pages/AuthPage/api/authThunk";
import { useLocation, useNavigate } from "react-router-dom";
import {
  clearError,
  selectLoginError,
  selectLoginLoading,
} from "@/pages/AuthPage/model/slice/authSlice";
import { XCircle } from "@phosphor-icons/react";

export const LoginPage = () => {
  const [state, setState] = useState<LoginMutation>({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector(selectLoginError);
  const [emptyField, setEmptyField] = useState(false);
  const loading = useAppSelector(selectLoginLoading);
  const location = useLocation();

  const changeField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(location);

  useEffect(() => {
    if (location.pathname === "/login") {
      dispatch(clearError());
    }
  }, [location.pathname, dispatch]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (state.email.trim() === "" || state.password.trim() === "") {
      setEmptyField(true);
    } else {
      await dispatch(login(state)).unwrap();
      setState({
        email: "",
        password: "",
      });
      navigate("/my-room");
    }
  };

  return (
    <div className="w-full h-[100vh] bg-secondary md:bg-black md:bg-opacity-50">
      <form className="flexColCenter h-[80vh]" onSubmit={handleSubmit}>
        <div className="w-[80%] lg:w-[30%] bg-thirsty rounded-[20px] py-[20px] px-[24px] flex flex-col gap-y-[24px] text-center">
          <div className="flex justify-end cursor-pointer">
            <XCircle size={22} onClick={() => navigate("/")} />
          </div>
          <div className="flex flex-col gap-y-[12px]">
            <h2 className="font-bold text-primary text-[32px]">Вход</h2>
            <p className="font-normal text-[20px] text-primary">
              Введите свои данные
            </p>
          </div>
          <InputField
            type="email"
            typeField="defoult"
            value={state.email}
            name="email"
            onChange={changeField}
            placeholder={"text@mail.com"}
            required={true}
          />
          <InputField
            type="password"
            typeField="defoult"
            value={state.password}
            name="password"
            onChange={changeField}
            placeholder={"password"}
            required={true}
          />
          {error && (
            <p className="text-red text-[16px]">
              Не правильно пароль или почта!
            </p>
          )}
          {emptyField && (
            <p className="text-red text-[16px]">
              Поле не должен содержать пробелы!
            </p>
          )}
          <Button typeButton="primary" type="submit" disabled={loading}>
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};
