
import { useState } from 'react';

import Header from './assets/components/Header';
import Content from './assets/components/Content';
import Footer from './assets/components/Footer';


const App= ()=>{

  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    const inputText = document.getElementById('textArea').value;
    if(inputText==''){
      alert('Please Write anything');
    }
    else{
        setDisplayText(inputText);
      }
  };

  return (
    <div>
      <Header title="My Simple React Assignment" />
      <Content text={displayText} onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
};

export default App;