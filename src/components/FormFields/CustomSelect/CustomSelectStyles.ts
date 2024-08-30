import { ISelectOption } from "@/types/select";
import { GroupBase, StylesConfig } from "react-select";

export const customSelectStyles: StylesConfig<
  ISelectOption,
  false,
  GroupBase<ISelectOption>
> = {
  container: (baseStyles) => ({
    ...baseStyles,
    maxWidth: 110,
    width: "100%",
  }),
};
