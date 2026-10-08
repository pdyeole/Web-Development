import React,{useState} from 'react'
import Card from './components/Card.jsx'


const App = () => {
  
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDescription, setUserDescription] = useState("");


  const localData = JSON.parse(localStorage.getItem("all-users")) || [];
  const [allUsers, setAllUsers] = useState(localData);
  
  const setValueforInputName = (e)=>{
    setUserName(e.target.value);
  }
  const setValueforInputImage = (e)=>{
    setUserImage(e.target.value);
  }
  const setValueforInputRole = (e)=>{
    setUserRole(e.target.value);
  }
  const setValueforInputDescription = (e)=>{
    setUserDescription(e.target.value);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    
    const oldUsers = [...allUsers];
    oldUsers.push({userName,userImage,userRole,userDescription})
    setAllUsers(oldUsers);
    localStorage.setItem("all-users",JSON.stringify(oldUsers));
    console.log(JSON.parse(localStorage.getItem("all-users")));
    setUserName("");
    setUserImage("");
    setUserRole("");
    setUserDescription("");
  }

  return (
    <div className="h-screen bg-black text-white">
       <form className="flex flex-wrap px-2 py-2" onSubmit={submitHandler} >

          <input value={userName} onChange={setValueforInputName}
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[48%]" type="text" 
          placeholder="Enter your name"/>

          <input value={userImage} onChange={setValueforInputImage}
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[48%]" type="text" 
          placeholder="Image Url"/>

          <input value={userRole} onChange={setValueforInputRole} 
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[48%]" type="text" 
          placeholder="Enter Role"/>

          <input value={userDescription} onChange={setValueforInputDescription}
          className="border-2 text-xl font-semibold px-5 py-2 rounded w-[48%]" type="text" 
          placeholder="Enter Description"/>

          <button className="px-5 py-2 bg-emerald-500 active:scale-97 cursor-pointer rounded m-2 w-[90%]">Create User</button>

       </form>

      <div className="flex flex-wrap px-4 py-10 gap-10 ">
            {allUsers.map((ele,idx)=>{
              return <Card key={idx}
              index={idx}
              allUsers={allUsers} setAllUsers={setAllUsers} userName={ele.userName} userImage={ele.userImage} userRole={ele.userRole} userDescription={ele.userDescription}/>
            })}
      </div>

    </div>
  )
}

export default App
