import { useEffect, useState } from 'react';
import { IUser } from './types/interfaces';
import axios from 'axios';
import UserItem from './components/UserItem';
import List from './components/List';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} />} />
    </div>
  );
}

export default App;
