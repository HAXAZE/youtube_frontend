export  function VideoCard(props:any){
    return <div>
        <img src={props.image} className="rounded-xl"></img>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
            <img className={"rounded-full w-12 h-14 pt-2"}
            src={props.image}></img>
            </div>
            <div className="col-span-11 ">
            <div>
                {props.title}
             </div>
            <div className="col-span-11 text-gray-400 text-base">
                {props.author}
            </div>
            <div className="col-span-11  text-gray-400 text-base">
                {props.views} | {props.timestamp}
            </div>
            </div>
            
        </div>
    </div>
}