import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AssignmentsIndex from "./src/components/AssignmentsIndex";
import SingleAssignment from "./src/components/SingleAssignment";
import ClientSignUp from "./src/components/ClientSignUp";
import ClientPage from "./src/components/ClientPage";
import AssignmentForm from "./src/components/AssignmentForm";
import Login from "./src/components/Login";
import { useSelector } from "react-redux";
import { Button } from "react-native";
import { Text, Item } from "native-base";

const Stack = createStackNavigator();

const App = () => {
  const authenticated = useSelector((state) => state.authenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={myOptions}>
        <Stack.Screen
          name="develUp"
          component={AssignmentsIndex}
          options={({ navigation }) => ({
            headerRight: () => (
              <Item>
                {!authenticated && (
                  <Text>
                    <Button
                      onPress={() => navigation.navigate("login")}
                      title="Login"
                    />
                  </Text>
                )}
              </Item>
            ),
          })}
        />
        <Stack.Screen name="singleAssignment" component={SingleAssignment} />
        {authenticated ? (
          <>
            <Stack.Screen name="clientPage" component={ClientPage} />
            <Stack.Screen name="assignmentForm" component={AssignmentForm} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="clientSignUp" component={ClientSignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const myOptions = {
  headerStyle: { backgroundColor: "#F9AA33" },
  title: "develUp",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  headerTintColor: "white",
};
