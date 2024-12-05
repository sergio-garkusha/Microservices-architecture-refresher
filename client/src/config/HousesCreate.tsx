import { SyntheticEvent, useState } from 'react';
import Wrapper from './Wrapper';
import { redirect } from 'react-router';

const HousesCreate = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [isRedirect, setIsRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch('http://localhost:8000/api/houses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        image,
        description,
      }),
    });

    setIsRedirect(true);
  };
  
  if (isRedirect) {
    redirect('/config/houses');
    return;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            placeholder='Name'
            type='text'
            className='form-control'
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Image</label>
          <input
            placeholder='Image'
            type='text'
            className='form-control'
            name='image'
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input
            placeholder='Description'
            type='text'
            className='form-control'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className='btn btn-outline-secondary'>Save</button>
      </form>
    </Wrapper>
  );
};

export default HousesCreate;
