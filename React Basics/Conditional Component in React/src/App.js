function LogInOutButton(props){
  if(props.isLoggedIn){
    return <LogoutButton />
  } else {
    return <LoginButton />
  }
}

function LoginButton(){
  return <button>Log In</button>
}

function LogoutButton(){
  return <button>Log Out</button>
}

function App() { 
  return (
    <LogInOutButton isLoggedIn={false} /> 
  ) 
}; 

export default App;


