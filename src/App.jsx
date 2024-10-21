import Footer from "./components/Footer";
import { Greeting } from "./components/Greeting";
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import Person from "./components/Person";
import StyledCard from "./components/StyledCard";
import UserList from "./components/UserList";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <Greeting />
      {/* <UserList /> */}
      {/* <Person name={"Aftab"} age={22}/> */}
      {/* <Weather temperature={10}/> */}
      {/* <UserStatus loggedIn = {true} isAdmin = {false}/> */}
      <StyledCard/>
    </div>
  );
};

export default App;
