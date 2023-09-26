// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MyComponent } from '@jsdayie/my-component';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <MyComponent />
      <NxWelcome title="my-app-2" />
    </div>
  );
}

export default App;
