import React from 'react';
import styles from './FormControls.module.css'

type FormControlsPropsType = {
    input: any
    meta: any
    children: any
}
// First version of the code
// export const Textarea = ({input, meta, ...props}: FormControlsPropsType) => {
//     let isError = meta.error && meta.touched
//     return <div className={styles.formControl + ' ' + `${isError ? styles.error : ''}`}>
//         <textarea {...input} {...props}/>
//         {isError && <span className={styles.error}>{meta.error}</span>}
//     </div>
// }
// export const Input = ({input, meta, ...props}: FormControlsPropsType) => {
//     let isError = meta.error && meta.touched
//     return <div className={styles.formControl + ' ' + `${isError ? styles.error : ''}`}>
//         <input {...input} {...props}/>
//         {isError ? <span className={styles.error}>{meta.error}</span> : ''}
//     </div>
// }

// Second version. Refactoring
export const FormControl = ({input, meta, children, ...restProps}: FormControlsPropsType) => {
    let props = {input, meta, children, ...restProps}
    let isError = meta.error && meta.touched
        return <div className={styles.formControl + ' ' + (isError ? styles.error : '')}>
            <div>{props.children}</div>
            {isError && <span className={styles.error}>{meta.error}</span>}
        </div>
}

export const Input = ({input, meta, ...props}: FormControlsPropsType) => {
    return <FormControl input={input} meta={meta}><input {...input} {...props}/></FormControl>
}
export const Textarea = ({input, meta, ...props}: FormControlsPropsType) => {
    return <FormControl input={input} meta={meta}><textarea {...input} {...props}/></FormControl>
}