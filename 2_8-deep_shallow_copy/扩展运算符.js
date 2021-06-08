let star = { name: '刘亦菲' };
let newStar = { ...star };
newStar.name = '迪丽热巴';
console.log(star.name) // 刘亦菲

let girl = {
  name: '开心',
  info: {
    height: 160,
    weight: 160
  }
}

let newGirl = { ...girl };

newGirl.info.height = 170;
console.log(girl.info.height); // 170

/**
 * 扩展运算符它的value是原始数据类型的时候，是深拷贝。当 value 是引用数据类型的时候，是浅拷贝
 */