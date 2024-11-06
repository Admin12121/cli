import React from "react";
import { useForm } from "react-hook-form";
import {
  FormGenerator,
  FormProps,
} from "@/registry/default/global/form-generator";

const FormPasswordVariantDemo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {PasswordVarinat.map((field) => (
        <div key={field.id} className="w-[300px] relative">
          <FormGenerator
            {...field}
            register={register}
            watch={watch}
            errors={errors}
          />
        </div>
      ))}
    </div>
  );
};

export default FormPasswordVariantDemo;

export const PasswordVarinat: FormProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
    label: "default",
  },
  {
    id: "2",
    inputType: "input",
    placeholder: "Password",
    name: "password1",
    type: "password",
    indicator: "hover",
    label: "hover",
  },
  {
    id: "3",
    inputType: "input",
    placeholder: "Password",
    name: "password2",
    type: "password",
    indicator: "inline",
    label: "inline",
  },
  {
    id: "4",
    inputType: "input",
    placeholder: "Password",
    name: "password3",
    type: "password",
    indicator: "strong",
    label: "strong",
  },
];
