import React, { useState, useEffect } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter: ' + counter)

    return function cleanup(){
      console.log('Unmount')
    };
  });

  useEffect(() => {
    console.log('Mounted') 
  }, []);

  return (
   <>
    <Htag tag='h1'>{counter}</Htag>
    <Button appearance = 'primary' className='Hello-btn' onClick={() => setCounter( x => x + 1)}> Кнопка</Button>
    <Button appearance = 'primary' arrow='right'> Кнопка</Button>
    <Button appearance = 'ghost' arrow='right' > Кнопка Ghost</Button>
    <P size ='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam deleniti possimus minus assumenda, officiis, officia amet quod doloribus quas quos tempore eum eius quo non, voluptate molestiae! Neque, repellat vitae.</P>
    <P size ='m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam deleniti possimus minus assumenda, officiis, officia amet quod doloribus quas quos tempore eum eius quo non, voluptate molestiae! Neque, repellat vitae.</P>
    <P size ='l'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam deleniti possimus minus assumenda, officiis, officia amet quod doloribus quas quos tempore eum eius quo non, voluptate molestiae! Neque, repellat vitae.</P>
    <Tag size="m" color="primary">Best Value</Tag>
    <Tag size="s" color="ghost">Best Value</Tag>
    <Tag size="s" color="red">Best Value</Tag>
    <Tag size="m" color="green">Best Value</Tag>
    <Tag color="grey">Best Value</Tag>
    <Tag color="red">Grey.com</Tag>
    <Rating rating={0} isEditadble />
   </>
  )
}
