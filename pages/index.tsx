import React, { useState  } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Рэйтинг</Htag>
      <Button appearance = 'primary' className='Hello-btn' > Кнопка</Button>
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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home)