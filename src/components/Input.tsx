import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./Form";
import * as I from "../styles/InputStyle";

type InputProps = {
  id: Path<IFormValues>;
  label: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error: boolean;
  type: string;
};

const Input = ({ label, id, type, register, required, error }: InputProps) => {
  if (type === "checkbox") {
    return (
      <I.LabelСheckbox>
        <I.Сheckbox id={id} type={type} {...register(id, { required })} />
        <span>{label}</span>
      </I.LabelСheckbox>
    );
  }

  return (
    <>
      <I.Label htmlFor={id}>{label}</I.Label>
      <I.TextInput type={type} id={id} error={error} {...register(id, { required })} />
      {error && <I.TextError>Обязательное поле</I.TextError>}
    </>
  );
};

export default Input;
