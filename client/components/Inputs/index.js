import React from "react";
import {
  InputContainer,
  TextAreaContainer,
  LabelContainer,
  SelectContainer,
} from "./styles";
export const Input = React.forwardRef(
  (
    {
      placeholder,
      name,
      type,
      onChange,
      value,
      defaultValue,
      onKeyDown,
      onKeyPress,
      min,
      max,
      step,
      disabled,
    },
    ref
  ) => {
    return (
      <InputContainer
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        min={min}
        step={step}
        max={max}
        ref={ref}
        disabled={disabled}
      ></InputContainer>
    );
  }
);

export const Label = React.forwardRef(
  (
    {
      placeholder,
      name,
      type,
      onChange,
      value,
      defaultValue,
      onKeyDown,
      onKeyPress,
      min,
      max,
      step,
    },
    ref
  ) => {
    return (
      <LabelContainer
        ref={ref}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      ></LabelContainer>
    );
  }
);

export const TextArea = ({
  placeholder,
  name,
  type,
  onChange,
  value,
  defaultValue,
  rows,
  columns,
  onKeyDown,
}) => {
  return (
    <TextAreaContainer
      onKeyDown={onKeyDown}
      rows={rows}
      columns={columns}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
    ></TextAreaContainer>
  );
};

export const Select = React.forwardRef(
  (
    {
      placeholder,
      name,
      type,
      onChange,
      value,
      defaultValue,
      rows,
      columns,
      onKeyDown,
      children,
      disabled,
    },
    ref
  ) => {
    return (
      <SelectContainer
        ref={ref}
        onKeyDown={onKeyDown}
        rows={rows}
        columns={columns}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {children}
      </SelectContainer>
    );
  }
);
