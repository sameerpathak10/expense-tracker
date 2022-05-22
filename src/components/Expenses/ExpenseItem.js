import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem =(props) => {

    
    const [title, setTile] = useState(props.title);
    const clickHandler =()=>{

        setTile('Updated!!');
        console.log(title);
    };
    return (
    <Card className='expense-item'>       
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>    
        <div className='expense-item__discription'>                 
            <div className='expense-item__price'>${props.amount}</div>
        </div>
       <div onClick={clickHandler}>Change Title</div>
    </Card>
    );
}

export default ExpenseItem;