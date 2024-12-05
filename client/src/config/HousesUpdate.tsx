import {
  PropsWithRef,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import Wrapper from './Wrapper';
import { redirect } from 'react-router';
import { House } from '../interfaces/house';

const HousesUpdate = (props: PropsWithRef<any>) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:8000/api/houses/${props.match.params.id}`
      );

      const house: House = await response.json();

      setName(house.name);
      setImage(house.image);
      setDescription(house.description);
    })();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:8000/api/houses/${props.match.params.id}`, {
      method: 'PUT',
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
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Image</label>
          <input
            placeholder='Name'
            type='text'
            className='form-control'
            name='image'
            defaultValue={image}
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
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className='btn btn-outline-secondary'>Save</button>
      </form>
    </Wrapper>
  );
};

export default HousesUpdate;
