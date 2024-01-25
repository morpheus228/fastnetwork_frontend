import styles from './ui-components.module.scss';

export default function Button(props: {
    text: string,
    type?: string,
    width: string,
    onClick?: () => void;
}) {
    return (
        <button onClick={props.onClick}
        style={{width: props.width}} className={`${styles['button']}  ${(props.type == 'primary') ? styles['btn-primary'] : ''}
        ${(props.type == 'disbl') ? styles['btn-disbl'] : ''}`}>{props.text}</button>
    );
}