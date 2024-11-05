"use client";
import React, { useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, X, Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  { regex: /[!-\/:-@[-`{-~]/, text: "At least 1 special characters" },
] as const;

type StrengthScore = 0 | 1 | 2 | 3 | 4 | 5;

const STRENGTH_CONFIG = {
  textcolors: {
    0: "text-red-500",
    1: "text-orange-500",
    2: "text-yellow-500",
    3: "text-green-500",
    4: "text-amber-700",
    5: "text-emerald-500",
  } satisfies Record<StrengthScore, string>,
  border: {
    0: "border-border",
    1: "border-red-500",
    2: "border-orange-500",
    3: "border-amber-500",
    4: "border-green-400",
    5: "border-emerald-500",
  } satisfies Record<StrengthScore, string>,
  colors: {
    0: "bg-border",
    1: "bg-red-500",
    2: "bg-orange-500",
    3: "bg-amber-500",
    4: "bg-amber-700",
    5: "bg-emerald-500",
  } satisfies Record<StrengthScore, string>,
  texts: {
    0: "Enter a password",
    1: "Weak password",
    2: "Medium password!",
    3: "Strong password!!",
    4: "Very Strong password!!!",
  } satisfies Record<Exclude<StrengthScore, 5>, string>,
} as const;

type Requirement = {
  met: boolean;
  text: string;
};

type PasswordStrength = {
  score: StrengthScore;
  requirements: Requirement[];
};

export type FormProps = {
  id: string;
  type: "text" | "email" | "password" | "number";
  inputType: "select" | "input" | "textarea" | "checkbox";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
  indicator?: "default" | "strong" | "inline" | "hover";
};

export type FormGeneratorProps = {
  type?: "text" | "email" | "password" | "number";
  inputType: "select" | "input" | "textarea" | "checkbox";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  watch?: any;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  indicator?: "default" | "strong" | "inline" | "hover";
};

export const FormGenerator = ({
  inputType,
  options,
  label,
  placeholder,
  register,
  watch,
  name,
  errors,
  type,
  lines,
  indicator,
}: FormGeneratorProps) => {
  const password = watch(name) || "";
  const calculateStrength = useMemo((): PasswordStrength => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));

    return {
      score: requirements.filter((req) => req.met).length as StrengthScore,
      requirements,
    };
  }, [password]);

  switch (inputType) {
    case "input":
      if (type === "password" && indicator !== "default") {
        switch (indicator) {
          case "strong":
            return (
              <StrongPassword
                inputType="input"
                label={label}
                type={type}
                placeholder={placeholder}
                register={register}
                name={name}
                errors={errors}
                indicator={indicator}
                password={password}
                calculateStrength={calculateStrength}
              />
            );
          case "inline":
            return (
              <InlinePasswordInput
                inputType="input"
                label={label}
                type={type}
                placeholder={placeholder}
                register={register}
                name={name}
                errors={errors}
                indicator={indicator}
                password={password}
                calculateStrength={calculateStrength}
              />
            );
          case "hover":
            return (
              <HoverPasswordInput
                inputType="input"
                label={label}
                type={type}
                placeholder={placeholder}
                register={register}
                name={name}
                errors={errors}
                indicator={indicator}
                password={password}
                calculateStrength={calculateStrength}
              />
            );
          default:
            return <></>;
        }
      }
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            className="dark:bg-themeBlack dark:border-themeGray text-themeTextGray h-10"
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "select":
      return (
        <Label htmlFor={`select-${label}`} className="flex flex-col gap-2">
          {label && label}
          <select
            id={`select-${label}`}
            className="w-full bg-transparent border-[1px] p-3 rounded-lg"
            {...register(name)}
          >
            {options?.length &&
              options.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                  className="dark:bg-muted"
                >
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Textarea
            className="bg-themeBlack border-themeGray text-themeTextGray"
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "checkbox":
      return (
        <Label
          className="flex items-center gap-2"
          htmlFor={`checkbox-${label}`}
        >
          <Checkbox
            color="secondary"
            id={`checkbox-${label}`}
            {...register(name)}
          />
          {label && label}
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    default:
      return <></>;
  }
};

const StrongPassword = ({
  label,
  type,
  placeholder,
  register,
  name,
  errors,
  password,
  calculateStrength,
}: FormGeneratorProps & {
  password: string;
  calculateStrength: PasswordStrength;
}) => {
  return (
    <div className="mb-1">
      <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
        {label && label}
        <Input
          id={`input-${label}`}
          type={type}
          value={password}
          placeholder={placeholder}
          aria-invalid={calculateStrength.score < 4}
          aria-describedby="password-strength"
          className="dark:bg-themeBlack dark:border-themeGray text-themeTextGray h-10"
          {...register(name)}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-red-400 mt-2">
              {message === "Required" ? "" : message}
            </p>
          )}
        />
      </Label>
      <div
        className="mt-3 mb-3 h-1 rounded-full bg-border overflow-hidden"
        role="progressbar"
        aria-valuenow={calculateStrength.score}
        aria-valuemin={0}
        aria-valuemax={4}
      >
        <div
          className={`h-full ${
            STRENGTH_CONFIG.colors[calculateStrength.score]
          } transition-all duration-500`}
          style={{ width: `${(calculateStrength.score / 5) * 100}%` }}
        />
      </div>
      <p
        id="password-strength"
        className="mb-2 text-sm font-medium flex justify-between"
      >
        <span>Must contain:</span>
        <span>
          {
            STRENGTH_CONFIG.texts[
              Math.min(
                calculateStrength.score,
                4
              ) as keyof typeof STRENGTH_CONFIG.texts
            ]
          }
        </span>
      </p>
      <ul className="space-y-1.5" aria-label="Password requirements">
        {calculateStrength.requirements.map((req, index) => (
          <li key={index} className="flex items-center space-x-2">
            {req.met ? (
              <Check size={16} className="text-emerald-500" />
            ) : (
              <X size={16} className="text-muted-foreground/80" />
            )}
            <span
              className={`text-xs ${
                req.met ? "text-emerald-600" : "text-muted-foreground"
              }`}
            >
              {req.text}
              <span className="sr-only">
                {req.met ? " - Requirement met" : " - Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const InlinePasswordInput = ({
  label,
  type,
  placeholder,
  register,
  name,
  errors,
  password,
  calculateStrength,
}: FormGeneratorProps & {
  password: string;
  calculateStrength: PasswordStrength;
}) => {
  return (
    <Label className={`relative border-0`}>
      <Input
        id={`input-${label}`}
        type={type}
        value={password}
        placeholder={placeholder}
        aria-invalid={calculateStrength.score < 4}
        aria-describedby="password-strength"
        className={`dark:bg-themeBlack  text-themeTextGray h-10 ${STRENGTH_CONFIG.border[calculateStrength.score]}`}
        {...register(name)}
      />
      <HoverCard openDelay={200}>
        <HoverCardTrigger className="absolute right-2 top-[10px]">
          <Info
            size={20}
            className={`cursor-pointer  ${
              STRENGTH_CONFIG.border[calculateStrength.score]
            } transition-all `}
          />
        </HoverCardTrigger>
        <HoverCardContent className="bg-background">
          <ul className="space-y-1.5" aria-label="Password requirements">
            {calculateStrength.requirements.map((req, index) => (
              <li key={index} className="flex items-center space-x-2">
                {req.met ? (
                  <Check size={16} className="text-emerald-500" />
                ) : (
                  <X size={16} className="text-muted-foreground/80" />
                )}
                <span
                  className={`text-xs ${
                    req.met ? "text-emerald-600" : "text-muted-foreground"
                  }`}
                >
                  {req.text}
                  <span className="sr-only">
                    {req.met ? " - Requirement met" : " - Requirement not met"}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </HoverCardContent>
      </HoverCard>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-red-400 mt-2">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
    </Label>
  );
};

const HoverPasswordInput = ({
  label,
  type,
  placeholder,
  register,
  name,
  errors,
  password,
  calculateStrength,
}: FormGeneratorProps & {
  password: string;
  calculateStrength: PasswordStrength;
}) => {
  return (
    <Label className="flex flex-col gap-2 relative" htmlFor={`input-${label}`}>
      {label && label}
      <Input
        id={`input-${label}`}
        type={type}
        value={password}
        placeholder={placeholder}
        aria-invalid={calculateStrength.score < 4}
        aria-describedby="password-strength"
        className="dark:bg-themeBlack dark:border-themeGray text-themeTextGray h-10"
        {...register(name)}
      />
      <HoverCard openDelay={200}>
        <HoverCardTrigger className="absolute right-2 top-[10px]">
          <Info
            size={20}
            className={`cursor-pointer  ${
              STRENGTH_CONFIG.textcolors[calculateStrength.score]
            } transition-all `}
          />
        </HoverCardTrigger>
        <HoverCardContent className="bg-background">
          <ul className="space-y-1.5" aria-label="Password requirements">
            {calculateStrength.requirements.map((req, index) => (
              <li key={index} className="flex items-center space-x-2">
                {req.met ? (
                  <Check size={16} className="text-emerald-500" />
                ) : (
                  <X size={16} className="text-muted-foreground/80" />
                )}
                <span
                  className={`text-xs ${
                    req.met ? "text-emerald-600" : "text-muted-foreground"
                  }`}
                >
                  {req.text}
                  <span className="sr-only">
                    {req.met ? " - Requirement met" : " - Requirement not met"}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </HoverCardContent>
      </HoverCard>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-red-400 mt-2">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
    </Label>
  );
};
