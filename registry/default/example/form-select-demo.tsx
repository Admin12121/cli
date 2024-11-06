import React from "react";
import { useForm } from "react-hook-form";
import {
  FormGenerator,
  FormProps,
} from "@/registry/default/global/form-generator";

const FormSelectDemo = () => {
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
      {FormSelect.map((field) => (
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

export default FormSelectDemo;

export const FormSelect: FormProps[] = [
  {
    id: "1",
    inputType: "select",
    placeholder: "Select Gender",
    name: "gender",
    options: [
      { value: "male", label: "Male", id: "1" },
      { value: "female", label: "Female", id: "2" },
    ],
  },
];
