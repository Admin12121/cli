import React from "react";
import { useForm } from "react-hook-form";
import {
  FormGenerator,
  FormProps,
} from "@/registry/default/global/form-generator";

const FormInputDemo = () => {
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
    <div className="flex flex-col w-[300px]">
      {FormInput.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          watch={watch}
          errors={errors}
        />
      ))}
    </div>
  );
};

export default FormInputDemo;

export const FormInput: FormProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
];
