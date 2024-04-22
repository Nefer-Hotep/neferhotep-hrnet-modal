import React, { useState } from 'react';
import DialogModal from './lib';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <DialogModal openModal={openModal} setOpenModal={setOpenModal} message={'It work !'} />
    </>
  );
};

export default App;
