function ModeToggle(){
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>light Mode is On</h1>

    function handleClick() {
        darkModeOn =! darkModeOn;
        if (darkModeOn == true){
            console.log("Dark mode is On");
        } else{
            console.log("light mode is On");
        }
    }
        return(
            <div>
                {darkModeOn ? darkMode : lightMode}
                <button onClick={handleClick}>
                    Click me!
                </button>
            </div>
        )
    
}
export default ModeToggle;
 
  