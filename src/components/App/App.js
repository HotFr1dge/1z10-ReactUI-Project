import './App.css';
import { Logo } from '../Logo/Logo';
import { User } from '../User/User';
import { UsersList } from '../UsersList/UsersList'
import { Question } from '../Question/Question';
import { FlexContainer } from '../FlexContainer/FlexContainer';

function App() {
  return (
    <div className="App">
      <Logo />
      <FlexContainer />
      <User />
    </div>
  );
}

export default App;
