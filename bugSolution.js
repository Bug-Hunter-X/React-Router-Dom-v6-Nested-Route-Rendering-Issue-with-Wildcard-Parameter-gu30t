```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersList />} >
          <Route path="/:id" element={<User />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function UsersList() {
  return (
    <div>
      <h2>Users List</h2>
      {/* Example - you'd normally have a list here */}
      <Routes>
          <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  );
}

function User() {
  const { id } = useParams();
  return <h1>User {id}</h1>;
}

export default App;
```