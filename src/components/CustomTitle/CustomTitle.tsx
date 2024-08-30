import { FC } from "react";

import classNames from "classnames";

import styles from "./CustomTitle.module.scss";

interface IPrors {
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
  className?: string;
}

export const CustomTitle: FC<IPrors> = ({ tagName, children, className }) => {
  const Tag = tagName;

  return (
    <Tag className={classNames(styles.root, styles[tagName], className)}>
      {children}
    </Tag>
  );
};
