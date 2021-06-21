import React from 'react';
interface Props {
    indexs: number,
    items: Array<Object>,
    updown:boolean
}
const  NavigationBodyChildren:React.FC<Props> = ({indexs,items,updown}) => {
    return (
        <>
            <div id={"district" + indexs} style={{display : "none"}}  >
                {
                    items && items.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                {updown === false ?<span>{item.ward}</span> : ""}
                                <br></br>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default NavigationBodyChildren;
