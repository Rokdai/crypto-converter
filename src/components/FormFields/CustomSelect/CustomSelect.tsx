import { ISelectOption } from "@/types/select";
import { nanoid } from "nanoid";
import { FC } from "react";
import Select, { SingleValue } from "react-select";
import { customSelectStyles } from "./CustomSelectStyles";

interface IPrors {
  id?: string;
  options?: ISelectOption[];
  value?: ISelectOption | null;
  onChange: (newValue: SingleValue<ISelectOption>) => void;
}

export const CustomSelect: FC<IPrors> = ({
  options,
  value,
  id = nanoid(),
  onChange,
}) => {
  return (
    <Select
      id={id}
      value={value}
      options={options}
      onChange={onChange}
      styles={customSelectStyles}
      classNamePrefix={"CustomSelect"}
    />
  );
};
