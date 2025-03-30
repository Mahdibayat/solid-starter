import { JSX } from 'solid-js';
import './style.css';

interface IBtn extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}
export function Btn(props: IBtn) {
  return (
    <button
      classList={{
        btn: true,
        loading: props.loading,
        disabled: props.disabled,
      }}
      {...props}
    >
      {props.children}
    </button>
  );
}
