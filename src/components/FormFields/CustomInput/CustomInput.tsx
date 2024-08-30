import { ChangeEvent, FC } from "react";
import { nanoid } from "nanoid";

import styles from "./CustomInput.module.scss";

interface IPrors {
  value: string;
  id?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  onChage: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<IPrors> = ({
  value,
  placeholder,
  id = nanoid(),
  type = "text",
  onChage,
}) => {
  return (
    <input
      className={styles.root}
      id={id}
      type={type}
      value={value}
      onChange={onChage}
      placeholder={placeholder}
    />
  );
};
