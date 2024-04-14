import './assets/index.css';

export const Button = ({name, onCLick}) => {
  return (
    <button className='button' type='button' onClick={onCLick}>{name}</button>
  );
};
