
// eslint-disable-next-line react/prop-types
const Tweet = ({name,message,like}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{message}</p>
      <p>number of likes {like}</p>
    </div>
  )
}

export default Tweet
