import Table from "./Table";

function DeskIsland({col,cellrem,desks,deskNos}) {
    const rowClass = "row row-cols-"+col+" g-1 my-0 justify-content-center ";
    const widthpx = col * cellrem + (col - 1) * 0.25; 
    return (
        <>
            <div class="container text-center p-0 m-0" style={{width: widthpx+"rem"}}>
                <div class={rowClass}>
                {deskNos.map((deskNo)=>{
                    let desk = desks.find((d) => d.DeskId === deskNo)
                    return(
                        <>
                            <div key={deskNo} class="col align-self-center">
                                <Table 
                                deskNo={deskNo}
                                username={desk ? desk.UserName :""}
                                isused={desk ? true : false }
                                />
                            </div>
                        </>
                    )
                })}
                </div>
            </div>
        </>
    );
};

export default DeskIsland