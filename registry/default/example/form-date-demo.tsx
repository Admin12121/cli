import React from "react";
import { useForm } from "react-hook-form";
import {
  FormGenerator,
  FormProps,
} from "@/registry/default/global/form-generator";

const FormDateDemo = () => {
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
      {FormDate.map((field) => (
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

export default FormDateDemo;

export const FormDate: FormProps[] = [
  {
    id: "1",
    inputType: "date",
    placeholder: "Date of Birth",
    name: "dateofbirth",
  },
];
