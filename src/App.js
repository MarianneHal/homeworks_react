import {Users, Header, Posts} from "./componets";


function App() {
  return (
    <div className="App">
      <Header/>
        <hr/>
        <Users/>
      <hr/>
        <Posts/>
    </div>
  );
}

export {App};
