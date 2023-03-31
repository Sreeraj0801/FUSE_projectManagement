import { useState, useEffect } from 'react';

export default function useGreeting() {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hour = date.getHours();

    if (hour < 12) {
      setGreeting('Good morning!');
    } else if (hour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good evening!');
    }
  }, [date]);

  return greeting;
}