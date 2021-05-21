import Seelist from '../components/seelist/seelist';


function SeeListPage(props:any){

 let id = props.match.params._id
 let title = props.match.params.title

  return (
    <div className="seelist">
      <Seelist title={title} id={id}/>
    </div>
  );
}

export default SeeListPage;