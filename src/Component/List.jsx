
const List = () => {

    const names=["leen","ali","marah","nada"];
  return (
    <div>
      
{
    names.map((e,index)=>{
       return <p key={index}>Hello {e}</p>
    })
}

    </div>
  )
}

export default List
