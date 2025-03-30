/* @refresh reload */
import { render } from 'solid-js/web';
import './styles/variables.css';
import './styles/container.css';
import './styles/mixin.css';
import './styles/index.css';
import App from './App.tsx';

const root = document.getElementById('root');

render(() => <App />, root!);
