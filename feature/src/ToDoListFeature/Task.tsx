import { Button, Typography } from '@mui/joy';
import { deleteButton } from '@org/ui';
import React from 'react';

interface TaskProps {
  taskName: string;
  Delete: () => void;
}

export const Task: React.FC<TaskProps> = ({ taskName, Delete }) => {
  return (
    <ul>
      <li style={{ marginBottom: '15px' }}>
        <Typography> {taskName} </Typography>
        <Button onClick={Delete} sx={deleteButton}>
          X
        </Button>
      </li>
    </ul>
  );
};
