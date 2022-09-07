import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/actions";
import {v4 as uuidv4} from "uuid";


export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(addTodo({
      id: uuidv4(), text: 'Learn React', completed: true, priority: 'High'
    }))
  }
  const handleInputNameChange = (e) => {
    setTodoName(e.target.value);
  }
  const handlePriorityChange = (value) => {
    setPriority(value);
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputNameChange}/>
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
