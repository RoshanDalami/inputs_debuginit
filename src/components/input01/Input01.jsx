import './input01.style.css'
import Button01 from './Button01';
import {FaSearch} from 'react-icons/fa'
export default function Input01() {
  return (
    <div >
      <h2 className='heading'>This is search Input type</h2>
    <div className="button">
    <FaSearch className='search'/>
    <input type="text"  className="text_input"/>
    <Button01/>
     
    </div>
      
    </div>
  );
};
