import React from 'react'

const Card = ({index,allUsers,setAllUsers,userName,userImage, userRole, userDescription}) => {
    const deleteHandler = ()=>{

        const newUsers = allUsers.filter((_, i) => i !== index)
        setAllUsers([...newUsers]);
        console.log(newUsers);
        localStorage.setItem("all-users",JSON.stringify(newUsers));
    }
  return (
    <div className='w-[24vw] lg:bg-green-500 bg-white text-black rounded-xl p-8 text-center flex flex-col items-center'>
      <img className="h-50 w-50 rounded-full " src={userImage} alt="" />

      <h1 className="text-2xl mt-2 font-semibold">{userName}</h1>
      <h5 className="text-blue-500 font-semibold text-lg my-2"> {userRole}</h5>
      <p className="text-sm font-medium leading-tight">{userDescription}</p>
      <button className="px-4 py-2 rounded bg-red-600 text-white font-semibold mt-3 text-xs cursor-pointer active:scale-95" onClick={deleteHandler}>Remove</button>
    </div>
  )
}   

export default Card
