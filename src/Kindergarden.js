function Kid(props) {
    return <h2>A {props.personality} girl!</h2>
}

function Kindergarden() {
    return (
    <>
      <h1>Who is/are in my Kindergarden?</h1>
      <Kid personality="naughty"/> 
    </>
    );
}

export default Kindergarden;