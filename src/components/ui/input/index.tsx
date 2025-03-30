import './style.css';
import { JSX } from 'solid-js';

interface IInput extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input(props: IInput) {
  return (
    <div class='input-container df fdc'>
      {props.label && <span class='label'>{props.label}</span>}
      <input
        {...props}
        classList={{
          input: true,
        }}
      />
    </div>
  );
}
