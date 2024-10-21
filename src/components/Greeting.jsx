import React from 'react'

export const Greeting = () => {
    const greetingMessage = "Hello, This is me learning React";
    const name = "Aftab Zaheer";
    const today = new Date();

   return <div>

        <h1>{greetingMessage}</h1>
        <p>My name is {name} and the date today is {today.getDate()}</p>

   </div>
}
