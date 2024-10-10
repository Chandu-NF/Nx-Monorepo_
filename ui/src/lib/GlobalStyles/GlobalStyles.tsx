import { SxProps } from '@mui/joy/styles/types';

export const HeaderStyles: SxProps = {
  padding: '1rem',
  backgroundColor: '#2657ba',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  flexDirection: 'row',
  gap: '55px',
};

export const ToDoListBox: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20rem',
  width: '100%',
};

export const TaskStyle: SxProps = {
  position: 'absolute',
  width: '300px',
  height: '40px',
  borderRadius: '10px',
  left: '40%',
  top: '8rem',
  padding: '2px',
  fontSize: '16px',
};

export const AddStyle: SxProps = {
  position: 'absolute',
  width: '100px',
  height: '40px',
  borderRadius: '10px',
  left: '46%',
  top: '12rem',
  padding: '2px',
  fontSize: '16px',
};

export const TitleStyle: SxProps = {
  position: 'absolute',
  left: '680px',
  top: '1rem',
  fontFamily: 'sans-serif',
  fontSize: '30px',
};

export const deleteButton: SxProps = {
  position: 'absolute',
  left: '200px',
  backgroundColor: 'crimson',
  color: 'white',
};

export const cardStyles: SxProps = {
  minWidth: 280,
  backgroundColor: 'wheat',
  borderRadius: 12,
  border: '2px solid black',
};
