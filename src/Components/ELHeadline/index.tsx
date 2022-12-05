import React from 'react';

import cn from 'classnames';
import styles from './index.module.scss';

interface IProps {
  className?: string | undefined;
  children: React.ReactNode;
}

const ELHeadline = ({ className, children }: IProps) => {
  return <h2 className={cn(styles.container, className)}>{children}</h2>;
};

export default ELHeadline;
