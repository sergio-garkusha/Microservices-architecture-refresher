import React, { useEffect, useState } from 'react';
import { House } from '../interfaces/house';
import Wrapper from '../config/Wrapper';

const Cores = () => {
  const [houses, setHouses] = useState([] as House[]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://ed-4683640472600576.educative.run/api/houses');

      const data = await response.json();

      setHouses(data);
    })();
  }, []);

  const like = async (id: number) => {
    await fetch(`https://ed-4683640472600576.educative.run/api/houses/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    setHouses(
      houses.map((h: House) => {
        if (h.id === id) {
          h.likes++;
        }

        return h;
      })
    );
  };

  const check = async (id: number) => {
    await fetch(`https://ed-4683640472600576.educative.run/api/houses/${id}/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    setHouses(
      houses.map((h: House) => {
        if (h.id === id) {
          h.checks++;
        }

        return h;
      })
    );
  };

  return (
    <Wrapper>
      <main role='main'>
        <div className='album py-5 bg-light'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/001.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Bob Mansion</b>
                    </p>
                    <p className='card-text'>The Haven For Royals</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(1)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(1)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/002.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Fahim Castle</b>
                    </p>
                    <p className='card-text'>The Luxurious Home</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(2)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(2)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/003.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Cecilia Villa</b>
                    </p>
                    <p className='card-text'>The Garden Home</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(3)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(3)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/004.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Kristina Deluxe</b>
                    </p>
                    <p className='card-text'>The Waterfront Mansion</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(4)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(4)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/005.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Andrew Palace</b>
                    </p>
                    <p className='card-text'>The Cozy Place</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(5)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(5)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/006.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Aysha Citadel</b>
                    </p>
                    <p className='card-text'>The Serene Dwelling</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(6)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(6)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/007.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Amna Fotress</b>
                    </p>
                    <p className='card-text'>The Kingly Stronghold</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(7)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(7)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/008.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Awais Fort</b>
                    </p>
                    <p className='card-text'>The Exquisite Villa</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(8)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(8)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/009.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Mian Tower</b>
                    </p>
                    <p className='card-text'>The Beautiful Edifice</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(9)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(9)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/010.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Hafsa Acropolis</b>
                    </p>
                    <p className='card-text'>The Powerful Abode</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(10)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(10)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/011.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Joy Manor</b>
                    </p>
                    <p className='card-text'>The Magnificent Home</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(11)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(11)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
                <div className='card mb-4 shadow-sm'>
                  <img src={'/images/012.png'} height='180' alt='' />
                  <div className='card-body'>
                    <p className='card-text'>
                      <b>Nelson Court</b>
                    </p>
                    <p className='card-text'>The Marble Estate</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => like(12)}
                        >
                          Like
                        </button>
                      </div>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                          onClick={() => check(12)}
                        >
                          Check
                        </button>
                      </div>
                      <small className='text-muted'>likes</small>
                      <small className='text-muted'>checks</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Cores;
