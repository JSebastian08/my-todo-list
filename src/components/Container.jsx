import React from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import { useState } from "react";


const Container = () => {
    
    const [list, setList] = useState([]); // (B-1)
    // (A-2)
    const handleAddItem = addItem => {
    setList([...list, addItem]); // (B-2)
    };
    
return (
    <div>
        {/*(A-1)*/}
        <FormTodo handleAddItem={handleAddItem} />
        {/*(C)*/}
        <TaskList list={list} setList={setList} />

    </div>
);
};
export default Container;
