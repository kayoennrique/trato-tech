import { forwardRef } from 'react';
import styles from './Select.module.scss';

function Select({ value, onChange, children, ...othersProps }, ref) {
  return (
    <select
      ref={ref}
      value={value}
      onChange={onChange}
      {...othersProps}
      className={styles.select}
    >
      {children}
    </select>
  )
}

export default forwardRef(Select);