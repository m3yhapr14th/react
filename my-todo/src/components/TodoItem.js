import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import './TodoItem.css'

const TodoItem = ({ todo }) => {
    const { id, text, checked } = todo;
    return <div className="TodoItem">
        <div className={`content ${checked ? 'checked' : ''}`}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
        </div>
    </div>;
};

export default TodoItem;