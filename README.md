
# neferhotep-hrnet-modal

'neferhotep-hrnet-modal' is a modal component designed specifically for the HRNET project. 

It displays a customizable modal window that can be dismissed by clicking outside the modal, clicking the "X" button, or pressing the "Escape" key on your keyboard.



## Installation

To install 'neferhotep-hrnet-modal', use npm. This package relies on prop-types for prop type checking:

```bash
  npm install neferhotep-hrnet-modal prop-types
```
    
## Props

The component accepts the following props:

| Props       | Type           | Description  |
| ------------- |:-------------:| -----:|
| openModal      | bool | Indicates whether the modal is open or closed. |
| setOpenModal   | func | Function to toggle the modal's open state. 
| message        | string | Message to be displayed inside the modal. |
| className | string | CSS class to customize the modal's appearance. |

## Dependencies

Ensure you have the following dependencies in your project:

```json
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
  "prop-types": "^15.8.1"
```
## Usage/Examples

Import and use the component as follows:

```javascript
import React, { useState } from 'react';
import DialogModal from 'neferhotep-hrnet-modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <DialogModal 
        openModal={openModal}
        setOpenModal={setOpenModal}
        message={'It work !'}
        className="Modal"}
      />
    </>
  );
};

export default App;
```



## HTML Structure

Here's the expected HTML structure of the modal when rendered:

```html
<div
  aria-modal="true"
  className="modal"
  onClick={[Function]}
  onKeyDown={[Function]}
  role="dialog"
  tabIndex="-1"
>
  <div
    className="modal-content"
  >
    <button
      aria-label="Close"
      className="close-btn"
      onClick={[Function]}
    >
      ×
    </button>
    <p>
      Test message !
    </p>
  </div>
</div>
```
## CSS

Default CSS for the modal:

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: relative;
  margin-left: 10px;
  height: 29px;
  width: 29px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background: none;
  font-size: 24px;
  cursor: pointer;
}
```
## Running Tests

To run integration tests for better maintainability, use the following command:

```bash
  npm run test
```


## Authors

- [@Régis EFFINGER](https://github.com/Nefer-Hotep)

