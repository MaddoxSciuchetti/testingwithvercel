
import { GoArrowUpRight } from "react-icons/go";
import { MdDelete } from "react-icons/md";

import "./Todo.css";


function ToDoItem({item, toggle, gotopage}) {
    return (
        <div className="item-wrapper">
            <div className="items">
                <div className="text-todo itum">
                    <span>{item}</span>
                </div>
                <div className="icons">
                    <div className="itum arrow_btn">
                        <GoArrowUpRight  onClick={() => gotopage(item)}/>
                    </div>
                    <div className="itum delete_btn">
                        <MdDelete onClick={() => toggle()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ToDoItem;