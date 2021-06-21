import React, {useEffect} from 'react';

interface Props {
    TabHistory: Array<Object>,
    handleTab: (item: any) => void,
}

const NavHomeBottom: React.FC<Props> = ({TabHistory, handleTab}) => {
    let select = document.getElementsByClassName("title-History__span") as HTMLCollectionOf<HTMLElement>;
    useEffect(() => {
        loadTimeSheet();
    }, [])

    const loadTimeSheet = () => {
        select[0].style.background = "#4490FF";
        select[0].style.color = "#FFFFFF";
        select[0].style.borderRadius = "4px";
    }


    const clickSlect = (name: Object, index: number) => {
        handleTab(name)
        if (index === 0) {
            selectTimeSheet()
        } else if (index === 1) {
            selectHistory()
        }
    }
    const selectTimeSheet = () => {
        select[0].style.background = "#4490FF";
        select[0].style.color = "#FFFFFF";
        select[0].style.borderRadius = "4px";
        select[1].style.background = "";
        select[1].style.color = "";
        select[1].style.borderRadius = "";
    }
    const selectHistory = () => {
        select[1].style.background = "#4490FF";
        select[1].style.color = "#FFFFFF";
        select[1].style.borderRadius = "4px";
        select[0].style.background = "";
        select[0].style.color = "";
        select[0].style.borderRadius = "";
    }
    return (
        <React.Fragment>
            {
                TabHistory && TabHistory.map((item: any, index: number) => {
                    return <span className="title-History__span" key={index}
                                 onClick={() => clickSlect(item.name, index)}>
                                {item.name}
                            </span>
                })
            }
        </React.Fragment>
    );
}

export default NavHomeBottom;
