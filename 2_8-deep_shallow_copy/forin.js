// 实现浅拷贝
let shallowCopy = obj => {
  let rst = {};
  // 遍历对象
  for (let key in obj) {
    // 只复制本身拥有的属性（非继承过来的属性）
    if (obj.hasOwnProperty(key)) {
      rst[key] = obj[key]
    }
  }
  return rst;
}

let star = {
  name: '古力娜扎',
  age: 19,
  // 又是一个对象
  friend: {
    name: '黄渤'
  }
}

let otherStar = shallowCopy(star)
otherStar.name = '刘亦菲';
otherStar.age = 30;
otherStar.friend.name = '孙红雷';

console.log(star);