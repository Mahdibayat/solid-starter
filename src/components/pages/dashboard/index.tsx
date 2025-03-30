import { Btn } from '../../ui';
import { Input } from '../../ui/input';
import './dashboard.css';

export default function DashboardPage() {
  return (
    <div class='dashboard'>
      <h1 on:click={console.log}>Dashboard</h1>
      <p id='blue'>hi</p>
      <Btn>btn</Btn>

      <br />

      <Input
        label='salam'
        placeholder='dfklsdjflkj'
      />

      <span>hi</span>
    </div>
  );
}
