import { forwardRef } from 'react';
import styles from './Input.module.scss';

function Input({ value, onChange, ...othersProps }, ref) {
    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
            {...othersProps}
            className={styles.input}
        />
    );
}

export default forwardRef(Input);