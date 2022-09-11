import {Button, Col, Input, Row, Select, Tag} from 'antd';
import Todo from '../Todo';
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodos} from "./todoListSlice";
import {v4 as uuid4} from "uuid";
import {todosRemainingSelector} from "../../redux/selectors";


export default function TodoList() {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");
    const todoList = useSelector(todosRemainingSelector);
    const todoInputRef = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // dispatch(
        //     todoListSlice.actions.addTodo({
        //         id: uuid4(), text: todoName, completed: false, priority: priority
        //     }))
        //
        // setTodoName("");
        // setPriority("Medium");
        // todoInputRef.current.focus();

        dispatch(
            addTodos({
                id: uuid4(), text: todoName, completed: false, priority: priority
            })
        )
    }
    const handleInputNameChange = (e) => {
        setTodoName(e.target.value);
    }
    const handlePriorityChange = (value) => {
        setPriority(value);
    }
    return (
        <Row style={{height: 'calc(100% - 40px)'}}>
            <Col span={24} style={{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
                {todoList.map((todo) =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.text}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                )}
            </Col>
            <Col span={24}>
                <Input.Group style={{display: 'flex'}} compact>
                    <Input
                        ref={todoInputRef}
                        value={todoName}
                        onChange={handleInputNameChange}
                    />
                    <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleSubmit}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
