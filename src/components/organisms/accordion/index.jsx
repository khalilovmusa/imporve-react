import React, { useState } from "react";
import './styles.css'
import { accordionData as data } from '../../../store/data/accordion'

const Accordion = () => {

    const [ selected, setSelected ] = useState(null);
    const [ toggleMultiSelection, setToggleMultiSelection ] = useState(false);
    const [ multipleId, setMultipleId ] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultipleSelection = (getCurrentId) => {
        let copyMultiple = [...multipleId];

        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId === -1 ) {
            copyMultiple.push(getCurrentId);
        }else{
            copyMultiple.splice(findIndexOfCurrentId, 1)
        }

        setMultipleId(copyMultiple)
    }
    console.log(selected, multipleId)
    return(
        <div className="wrapper-accordion">
            <button onClick={() => setToggleMultiSelection((prevState) => !prevState) } className="mode">Multi selection: { toggleMultiSelection ? `Enabled` : `Disabled` }</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <div key={dataItem.id} className="accordionItem">
                        <div onClick={ toggleMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="accordionTitle">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            toggleMultiSelection ? 
                            multipleId.indexOf(dataItem.id) !== -1 && (
                                <div className="content">
                                {dataItem.answer}
                                </div>
                            )
                            :
                            selected === dataItem.id && (
                            <div className="content">
                                {dataItem.answer}
                            </div>
                            )
                        }
                    </div>)
                     : <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordion;