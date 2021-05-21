import Createactivity from "../components/createactivity/createactivity";

function CreateActivityPage(props:any) {
  let id = props.match.params._id
  console.log(id)
  return (
    <div className="createactivity">
      <Createactivity props={id}/>
    </div>
  );
}

export default CreateActivityPage;