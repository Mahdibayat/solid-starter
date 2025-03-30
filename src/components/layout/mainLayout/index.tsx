import { RouteProps, A } from '@solidjs/router';
import { Btn } from '../../ui';
import { createEffect, createSignal } from 'solid-js';

export default function MainLayout(props: RouteProps<'/'>) {
  const [theme, setTheme] = createSignal('dark');

  function toggleTheme (dark?:boolean) {
    document.documentElement.style.setProperty(
      '--bg-color',
      dark ? '#252525' : '#ededed'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      dark ? '#ffffff' : '#000000'
    );
  }

  createEffect(() => {
    const value = theme();
    toggleTheme(value === 'dark')
  });

  return (
    <div>
      <header>header

        <Btn on:click={()=> setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>toggleTheme</Btn>
        <div class='df' style="gap:20px;" >
          <A href='/two'>page two</A>
          <A href='/' >home</A>
        </div>
      </header>
      <main class='container'>{props.children}</main>
      <footer>footer</footer>
    </div>
  );
}
