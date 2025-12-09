
import { GoArrowUpRight } from "react-icons/go";
import { MdDelete } from "react-icons/md";

import "./Todo.css";


function ToDoItem({item, toggle, gotopage}) {
    return (
        <div className="item-wrapper">
            <div className="items">
                <div className="itum name">
                    <span>{item}</span>
                </div>
                <div className="itum arrow btn">
                     <GoArrowUpRight  onClick={() => gotopage(item)}/>
                </div>
                <div className="itum btn">
                    <MdDelete onClick={() => toggle()}/>
                </div>
                {/*<span className="actions"></span>*/}
            </div>

        </div>
    )
}
export default ToDoItem;