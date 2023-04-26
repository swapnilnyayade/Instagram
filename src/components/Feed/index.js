import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    user: {
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_EFwq65Y_sFyCt8ROvTjFKOFxwTrYWM8SQ&usqp=CAU',
      name: 'Neha',
    },
    imageUri:
      'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/wml2sqgr72dsndwigtmu.jpg',
    caption: 'Beautiful Nature #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3b_4NDN6jtfcsA0tTbdHRyWrsbdkogDvnZQ&usqp=CAU',
      name: 'Mr.Swagger',
    },
    imageUri:
      'https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg',
    caption: 'MickeyMouse #instagram',
    likesCount: 4321,
    postedAt: '10 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGhxuJtS2zDHXOib9lTMes3X5QZX3J-qQjA&usqp=CAU',
      name: 'Nusrat',
    },
    imageUri:
      'https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/05/EID-MUBArak.png?fit=1920%2C1080&ssl=1',
    caption: 'Eid Mubarak #instagram',
    likesCount: 454,
    postedAt: '1 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
