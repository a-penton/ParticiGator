import { View, Text } from "react-native";
import { axios } from "axios";
import { useAsync } from 'react-async';

const fetchUsers = async () => {
    const result = await axios.get('http://localhost:3000/users');
    console.log(result);
    return result.data; 
}

const UsersList = () => {
    console.log(1);
    const asyncUsers = useAsync(fetchUsers, []);
    const users = asyncUsers.data ?? null;
    console.log(users);

    return (
    <View>
      <Text>Boo</Text>
      {asyncUsers.isLoading ? <Text>Loading...</Text> : null}
      {asyncUsers.isError ? <Text>Error: {asyncUsers.error.message}</Text> : null}
      {users !== null ? 
        users.map((user) => {
          return (
            <View key={user.id}>
              <Text>{user.id}</Text>
              <Text>{user.name}</Text>
            </View>
          )
        }) : null
      }
      
    </View>
  );
}

export default UsersList;