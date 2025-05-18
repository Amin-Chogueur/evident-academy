"use client";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type SelectOption = {
  label: string;
  value: string;
};

type InputType = {
  type: string;
  placeholder?: string;
  lable: string;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
  values?: SelectOption[];
};

export default function Input({
  lable,
  type,
  register,
  error,
  placeholder,
  values,
}: InputType) {
  const id = lable.toLowerCase().replace(/\s+/g, "-");

  return values ? (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-bold">
        {lable} <span className="text-red-700">*</span>:
      </label>
      <select id={id} {...register} className="border rounded p-2">
        <option value="">{placeholder || `Select ${lable}`}</option>
        {values.map((value) => (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  ) : (
    <div>
      <label htmlFor={id} className="block font-semibold mb-1">
        {lable} <span className="text-red-700">*</span>:
      </label>
      <input
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-2"
      />
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
}
