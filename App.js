import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
// const[firstName,setfirstName] =useState("");
// const[SecondtName,setSecondName] =useState("");



//   function ChangefirstnameHandler(event){
// setfirstName(event.target.value);
//   }
//   function ChangesecondnameHandler(event){
//     setSecondName(event.target.value);
//       }
const[formData,setformData]=useState({firstName:"" , lastName: "",email:"",Comments:"",isVisible:"true",favcar:""});

function ChangeHandler(event){
  setformData(prevformData=>{
    return{
        ...prevformData, 
        [event.target.name] : event.target.value
    }
  });
}

  return (
    <div className="App">
      <form>
        <input
        type="text" placeholder='first name' 
        onChange={ChangeHandler}
        name="firstName"
        value={formData.firstName}
         />
         <br></br>
         <br></br>
          <input
        type="text" placeholder='last name' 
        onChange={ChangeHandler}
        name ="lastName"
        value={formData.lastName}
         />

         <br/>

  <input
  type='email' placeholder='enter your email' onChange={ChangeHandler} name="email"
  value={formData.email}
  ></input>
<br></br>
<br/>
<textarea
  placeholder='Enter your Text'
  onChange={ChangeHandler}
  name='comments'
  value={formData.Comments}
/>
<br/>
<br/>
<input 
type='checkbox'
onChange={ChangeHandler}
name='isVisible'
id='isVisible'
value={formData.boxcheck} />
<label htmlFor='isVisible'>Am I ready?</label>



<input 
  type='radio'
  onChange={ChangeHandler}
  name='mode'
  value={formData.onlinemode}
  // checked={formData.mode ==="onlinemode"}
/>
<label htmlFor='mode'> onlinemode</label>


<input 
  type='radio'
  onChange={ChangeHandler}
  name='mode'
  value={formData.onlinemode}
  // checked={formData.mode ==="offlinemode"}
/>
<label htmlFor='mode'> offlinemode</label>
<br></br>
<br></br>

<label htmlFor='favcar'>tell me your fav car</label>
<select 
name="favcar"
onChange={ChangeHandler}
id='favcar'
value={formData.favcar}
>
  <option value="scorpio">Scorpio</option>
  <option value="fortuner">fortuner</option>
  <option value="thar">thar</option>
  <option value="legendar">legendar</option>
  <option value="defender">defender</option>
</select>


      </form>
    </div>
  );
}

export default App;
