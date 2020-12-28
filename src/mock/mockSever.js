import Mock from 'mockjs'
import floors from './floors.json'
Mock.mock('/mock/floors',{
    code : 200,
    data:floors
})