import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import UserContext from "../context";
import * as F from "../styles/FormStyle";

export type IFormValues = {
  login: string;
  password: string;
  remember: boolean;
};

const Form = () => {
  const [errorServer, setErrorServer] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useContext(UserContext);
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setErrorServer(null);
    setLoading(true);
    setTimeout(() => {
      if (user.userBd.login !== data.login) {
        setErrorServer(`Пользователя ${data.login} не существует`);
        setLoading(false);
        return;
      }
      if (user.userBd.password !== data.password) {
        setErrorServer(`Неправильны пароль`);
        setLoading(false);
        return;
      }
      user.user.login = data.login;
      user.user.password = data.password;
      if (data.remember) {
        localStorage.setItem("login", JSON.stringify(user.user.login));
        localStorage.setItem("password", JSON.stringify(user.user.password));
      }
      setLoading(false);
      navigate("/profile");
    }, 2500);
  };

  return (
    <>
      {errorServer && (
        <F.ErrorContainer>
          <F.ExclamationSpan>!</F.ExclamationSpan>
          <F.TextError>{errorServer}</F.TextError>
        </F.ErrorContainer>
      )}
      <F.Container onSubmit={handleSubmit(onSubmit)}>
        <Input error={!!errors.login} label="Логин" id="login" type="text" register={register} required />
        <Input error={!!errors.password} label="Пароль" id="password" type="password" register={register} required />
        <Input
          error={!!errors.password}
          label="Запомнить пароль"
          id="remember"
          type="checkbox"
          register={register}
          required={false}
        />
        <F.ButtonSubmit $loading={loading} type="submit" value="Войти" />
      </F.Container>
    </>
  );
};

export default Form;
