import { useState } from "react";

function Table ({deskNo,username,isused}){
    const [isUsed,setIsUsed] = useState(isused);

    return(
        <div class="ratio ratio-1x1">
            {
                (()=>{
                    if(deskNo == "blank"){
                        return;
                    }else if(deskNo == "none"){
                        return (<div class="bg-primary-subtle"></div>)
                    } else {
                        return (
                            <div
                                class={
                                    isUsed ?
                                        "rounded p-1 border border-primary border-4 text-bg-primary bg-gradient fs-5 lh-1 text-wrap text-break" :
                                        "btn btn-outline-secondary"
                                }
                                onClick={() => {
                                    setIsUsed(!isUsed);
                                }}> {isUsed ? username : "空"}</div>
                        )
                    }
                }
                )()
            }


        </div>
    );
};

export default Table