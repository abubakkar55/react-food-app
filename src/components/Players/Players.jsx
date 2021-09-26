import React from 'react';
import "./Players.css";

const Players = (props) => {
    const { name, role, img, age, team,} = props.player
    return (
        <div className="border rounded-md p-4">
            <div className="flex items-center justify-center">
                <img className="w-24 h-24 rounded-full" src={img} alt={name} />
            </div>
            <div className="mt-5">
                <h3 className="font-semibold text-lg"> <span className="text-blue-500">Name: </span>  {name}</h3>
                <h3 className="font-semibold text-lg">Age: {age} </h3>
                <h3 className="font-semibold text-lg">Role: {role} </h3>
                <h3 className="font-semibold text-lg"> <span className="text-blue-500">   Player of: </span> {team} </h3>
                <button className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-md shadow-lg">Read More </button>
            </div>
        </div>
    )
}

export default Players
