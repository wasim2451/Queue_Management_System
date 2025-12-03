export default function DisplayFunc({queue,onUpdate,onRemove}){
    
    
    return (
        <div className="display-container">
            <h2 className="header" style={{"color":"#ffff"}}>Current Queue</h2>
            <div>
            {
               queue.length==0 ? (<p className="text-normal">No Queue Present</p>) : (<div className="text-normal">Yes Queue Present</div>) 
            }
            </div>
            
        </div>
    )
}