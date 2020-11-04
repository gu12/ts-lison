console.log(1)

// // index.ts
// let a: number = 123;
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello, I am zcxiao";
// document.body.appendChild(h1);

// let num: number;
// num = 123;
// num = "123"; // error 不能将类型"123"分配给类型"number" num = 0b1111011; // 二进制的123
// num = 0o173; // 八进制的123
// num = 0x7b; // 十六进制的123

// let list1: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];

// let obj: object
// obj = { name: 'Lison' }
// console.log(obj.name) // error 类型“object”上不存在属性“name”

// interface Tuple extends Array<number | string> {
//     0: string;
//     1: number;
//     length: 2;
// }

// //上面这个声明中，我们定义接口   ，它继承数组类型，并且数组元素的类型是 构成的联合类 型，这样接口 就拥有了数组类型所有的特性。并且我们明确指定索引为0的值为   类型，索引为1的值为 类 型 ， 同 时 我 们 指 定 属性的类型字面量为 2，这样当我们再指定一个类型为这个接口   的时 候，这个值必须是数组，而且如果元素个数超过2个时，它的length就不是2是大于2的数了，就不满足这个接口定义
// // 了，所以就会报错;当然，如果元素个数不够2个也会报错，因为索引为0或1的值缺失。接口我们后面会在后面专 门的一节来讲，所以暂时不懂也没关系。

// interface Tuple extends Array<number | string> {
//     0: string;
//     1: number;
// }

// /**
//  *  也就是去掉接口中定义的   ，这样   接口的   就是从   继承过来的   类型，而不用必须是 2了。
//  */


// enum Roles {
//     SUPER_ADMIN = 1,
//     ADMIN = 3,
//     USER = 7
// }

// console.log(Roles[7])

// const getLength = (target: string | number): number => {
//     if ((target as string).length) { // error 报错信息看下方
//         return (target as string).length; // error 报错信息看下方 
//     }
//     else {
//         return target.toString().length;
//     }
// };

// const getFullName = ({ firstName,lastName}: { 
//     // 指定这个参数的类型，因为他是一个对象，所以这里来指定对象中每个字段的类型 
//     firstName: string,
//     lastName: string;
// }) => {
//     return `${firstName} ${lastName}`;
// };

// getFullName({firstName:'1'})


// interface RoleDic { [id: number]: string;
// }
// const role1: RoleDic = {
// 0: "super_admin",
// 1: "admin" };
// const role2: RoleDic = {
// 'a': "super_admin", 
// // error 不能将类型"{ s: string; a: string; }"分配给类型"RoleDic"。
//  3: "admin"
// };


interface Fish{
    fish:string
}
interface Water{
    water:string
}
interface Bird{
    bird:number
}

interface Sky{
    sky:string
}

type Condition<T> = T extends Fish? Bird : Sky
const aa:Condition<Fish | Bird> = { sky:'2'}

console.log(aa)

