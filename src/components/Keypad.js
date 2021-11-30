// Code Keypad Component Here

function KeyPad() {
    function enterPassword() {
        console.log('Entering password...')
    }
    return( 
        <form>
            <input type="password" onChange={enterPassword}/>        
        
        </form>
        
    )
}

export default KeyPad