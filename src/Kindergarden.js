function Kid(props) {
    return <h2>A {props.student.personality} girl who is {props.student.name}!</h2>
}

function Kindergarden() {
    const firstGirl = {name: "Camilla", personality: "clever"};
    const start = (a,b) =>{
      alert(`${a} ${b.type}`);
    }
    return (
    <>
      <h1>Who is/are in my Kindergarden?</h1>
      <Kid student= {firstGirl}/>
      <button onClick={(event) => start("Hide and seek!", event)}>Start a game!</button> 
    </>
    );
}

export default Kindergarden;