function Kid(props) {
    return <h2>A {props.student.personality} girl who is {props.student.name}!</h2>
}

function Kindergarden() {
    const firstGirl = {name: "Camilla", personality: "clever"};
    return (
    <>
      <h1>Who is/are in my Kindergarden?</h1>
      <Kid student= {firstGirl}/> 
    </>
    );
}

export default Kindergarden;