import React from 'react'
import { useEffect,useState } from 'react';

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("")
     useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const updatedDate = now.toLocaleDateString();
            const updatedTime = now.toLocaleTimeString();
            setDateTime(`${updatedDate} - ${updatedTime}`)
        }, 1000)
        return () => clearInterval(interval);
    }, []);
  return (
    <h2 className="date-time">{dateTime}</h2>
  )
}

