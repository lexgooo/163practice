const deepClone = obj => {
  let newObj = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          newObj[key] = deepClone(obj[key]);
        } else {
          // 如果不是对象直接拷贝
          newObj[key] = obj[key];
        }
      }
    }
  }
  return newObj
}

let richGirl = [{
  name: '开心',
  car: ['宝马', '奔驰', '保时捷'],
  drive: function () {},
  age: undefined
}];

let richBoy = deepClone(richGirl);
// console.log(richBoy);

richBoy[0].drive = '渣男开大G';
richBoy[0].name = '小明';
richBoy[0].car = ['哈罗单车', '摩拜']
richBoy[0].age = 20;
console.log(richGirl); // [ { name: '开心', car: [ '宝马', '奔驰', '保时捷' ], drive: [Function: drive], age: undefined }]
console.log(richBoy); // [ { name: '小明', car: [ '哈罗单车', '摩拜' ], drive: '渣男开大G', age: 20 } ]