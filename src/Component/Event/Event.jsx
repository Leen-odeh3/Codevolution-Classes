
const Event = () => {
    function change(){
        alert("hello.... ");
        console.log("welcome");
    }
  return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default Event
