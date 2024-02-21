import './App.css';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // initial default value to the response state that we should see when the page initally loads
  const [response, setResponse] = useState<string>(
    'Hi there! How can I assist you?'
  );
  // value will be the input written by the user
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log('setValue:', e.target.value);
  };

  // This function takes the contents of 'value' (the input from the user)
  // and then sends this value to our server, which then sends a new request
  // to the API
  // The function then waits for the new response and updates the 'response'
  // value which we then display on the page
  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:3005/chatbot', {
      question: value,
    });
    setResponse(response.data);
  };

  return (
    <div className='container'>
      <div>
        <input type='text' value={value} onChange={onChange}></input>
      </div>
      <div>
        <button onClick={handleSubmit}>Click me for answers!</button>
      </div>
      <div>
        <p>Chatbot: {response}</p>
      </div>
    </div>
  );
}

export default App;
