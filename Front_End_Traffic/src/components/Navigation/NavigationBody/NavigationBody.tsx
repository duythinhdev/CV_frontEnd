import React, {useState} from 'react';
import iconUp from "../../../assets/image/iconUp.svg";
import iconDown from "../../../assets/image/iconDown.svg";


interface Props {
    // district: []
}

const districtss: any = [
    {
        districts: "district 1",
        wards: [
            {
                ward: "an phu1"
            },
            {
                ward: "phu dong"
            },
            {
                ward: "phu loi"
            },
            {
                ward: "mai chi tho"
            },
        ]
    },
    {
        districts: "district 2",
        wards: [
            {
                ward: "an phu loi 2"
            },
            {
                ward: "an phu thanh loi"
            },
            {
                ward: "an phu thanh tinh"
            },
            {
                ward: "an phu thanh dong"
            },
        ]
    },
    {
        districts: "district 3",
        wards: [
            {
                ward: "an phu 3"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 4",
        wards: [
            {
                ward: "an phu 4"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 5",
        wards: [
            {
                ward: "an phu 5"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 6",
        wards: [
            {
                ward: "an phu 6"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 7",
        wards: [
            {
                ward: "an phu 7"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 7",
        wards: [
            {
                ward: "an phu 8"
            },
            {
                ward: "phu dong"
            },
            {
                ward: "dong an"
            },
            {
                ward: "dong xuan"
            },
        ]
    },
    {
        districts: "district 8",
        wards: [
            {
                ward: "phu 8"
            },
            {
                ward: "dong an"
            },
            {
                ward: "dong xuan"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 9",
        wards: [
            {
                ward: "dong xuan`9"
            },
            {
                ward: "dong an"
            },
            {
                ward: "dong xuan"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 10",
        wards: [
            {
                ward: "dong 10"
            },
            {
                ward: "an loi"
            },
            {
                ward: "xuan thu"
            },
            {
                ward: "an phu"
            },
        ]
    },
]
const NavigationBody: React.FC<Props> = ({
                                             //district
}) => {
    const [isUpDown, setIsUpDown] = useState(false as boolean);
    const isUpDownDistricstTrue = async (event: Event, item: Array<any>, index: number) => {
        console.log("index", index)
        event.preventDefault();
        let district = document.getElementById("index" + index) as HTMLElement;
        if (district.style.display == "none") {
            district.style.display = "block";
        } else {
            district.style.display = "none";
        }
        console.log("xx", district);
    }
    const isUpDownDistricstFalse = () => {
        setIsUpDown(false);
    }
    return (
        <>
            {
                districtss && districtss.map((item: any, index: number) => {

                        return (
                            <div className="nav--body__district--children" key={index}>
                                <div><span>{item.districts}</span>
                                    {isUpDown === false ?
                                        <img src={iconUp} className="icon"
                                             onClick={(e: any) => isUpDownDistricstTrue(e, item.wards, index)}/>
                                        : <img src={iconDown} onClick={() => isUpDownDistricstFalse()}
                                               className="icon"/>}
                                </div>
                                <div id={"index" + index} style={{display: "none"}}>
                                    {
                                        item.wards && item.wards.map((item: any, index: number) => {
                                            return (
                                                <div key={index}>
                                                    <span>{item.ward}</span>
                                                    <br></br>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
        </>
    );
}

export default NavigationBody;
