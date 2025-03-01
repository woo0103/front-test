import logo from './logo.svg';
import './App.css';
import MemberList from "./MemberList";
import MemberSearch from "./MemberSearch";

function App() {
  return (
    <div className="App">
      <h1>회원 목록</h1>
      <MemberList />
        <MemberSearch />
    </div>
  );
}

export default App;
