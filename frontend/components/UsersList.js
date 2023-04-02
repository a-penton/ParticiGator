import { View, Text } from "react-native";
import { useAsync } from 'react-async';
import { API } from "../API";

const fetchUsers = async () => {
  return await API.getAllUsers();
}

const UsersList = () => {
  const asyncUsers = useAsync(fetchUsers, []);
  const users = asyncUsers.data ?? null;
  
  return (
    <View>
    <Text>User List:</Text>
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