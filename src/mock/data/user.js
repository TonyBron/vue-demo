import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'chenyujia',
    password: '111477',
    avatar: '/static/24351657.jpg',
    name: '陈大帅哥'
  }
];

const Users = [];

// for (let i = 0; i < 86; i++) {
//   Users.push(Mock.mock({
//     id: Mock.Random.guid(),
//     name: Mock.Random.cname(),
//     addr: Mock.mock('@county(true)'),
//     'age|18-60': 1,
//     birth: Mock.Random.date(),
//     sex: Mock.Random.integer(0, 1)
//   }));
// }

export { LoginUsers, Users };
