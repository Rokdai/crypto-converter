import classNames from "classnames";
import { FC } from "react";

import styles from "./Skeleton.module.scss";

interface IPrors {
  className?: string;
}

export const Skeleton: FC<IPrors> = ({ className }) => {
  return <div className={classNames(styles.root, className)}></div>;
};
