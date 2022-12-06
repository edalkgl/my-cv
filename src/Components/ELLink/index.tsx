import cn from 'classnames';
import styles from './index.module.scss';

import React, { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
  children: React.ReactNode;
  className?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
}

const ELLink = ({ href, className, target, children }: IProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(styles.container, className)}>
      {children}
    </Link>
  );
};

export default ELLink;
