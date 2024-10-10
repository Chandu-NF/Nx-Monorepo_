import {
  Box,
  Button,
  Card,
  CardContent,
  Input,
  List,
  ListItem,
  Typography,
} from '@mui/joy';
import { Task } from '@org/feature';
import {
  AddStyle,
  TaskStyle,
  TitleStyle,
  ToDoListBox,
  cardStyles,
} from '@org/ui';
import { FormEvent, SetStateAction, useState } from 'react';

function App() {
  interface Task {
    id: string;
  }

  const [taskName, setTaskName] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTaskList([...taskList, { id: taskName }]);
    setTaskName('');
  };

  const deleteTask = (id: string): void => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <>
      <Typography sx={TitleStyle}> To-Do List</Typography>

      <Box component="form" onSubmit={addTask}>
        <Input
          placeholder="Enter your Task"
          value={taskName}
          required
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setTaskName(e.target.value)
          }
          variant="outlined"
          sx={TaskStyle}
        ></Input>
        <Button sx={AddStyle} type="submit">
          {' '}
          Add Task
        </Button>
      </Box>

      <Box sx={ToDoListBox}>
        <Card variant="outlined" sx={cardStyles}>
          <CardContent>
            <Typography textColor="common.black">Your Tasks:</Typography>
            <Typography textColor="common.black">
              <List sx={{ padding: '8px 0px', marginBottom: '50px' }}>
                {taskList.length > 0 ? (
                  taskList.map((task) => (
                    <Task
                      key={task.id}
                      taskName={task.id}
                      Delete={() => deleteTask(task.id)}
                    />
                  ))
                ) : (
                  <ListItem>No tasks added yet</ListItem>
                )}
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
