import Card from './components/Card';
import List from './components/List';
import MyForm from './components/MyForm';
import TypeMe from './components/TypeMe';

function App() {
  const user = {
    name: "John Doe",
    job: 'Engineer',
    hobby: 'Listen to music',
  }
  return (
    <div className="App">
      <div>
        <Card user={user} />
      </div>
      <List />
      <TypeMe />
      <MyForm/>
    </div>
  );
}

export default App;
