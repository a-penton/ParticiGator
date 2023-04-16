import { View, Text } from "react-native";
import { useAsync } from 'react-async';

const NoAssignments= () => {
  const asyncUsers = useAsync(fetchUsers, []);
  const users = asyncUsers.data ?? null;
  
  return (
    <View></View>
   
      );
    }
    
export default NoAssignments;