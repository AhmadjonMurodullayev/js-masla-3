// 1. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring
let arr = [1, 2, 3, 4, 5]
function arrSon(n){
    let num = []
   for (let i = 0; i < n.length; i++) {
    if(n[i] > 2) num.push(n[i])
   }
   return num;
}
console.log(arrSon(arr));
console.log(arr);

//  2. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping
let arr = [1, 2, 3, 4, 5]
function arrSon1(a){
    let juft = 0
    let toq = 0
    let res = 0
    let resut = 0
    for(let i = 0; i < navigator.length; i++){
        if(n[i] % 2 == 0){
            juft += n[i]
        }else{
            toq += n[i]
        }
    }
    res = juft-toq;
    resut.push('farqi: ${res}  juft son: ${juft} toq son: ${toq}');
    return resut;

}
console.log(arrSon1(arr));

// 3. foydalanuvchi 2 ta son kiritadi va shu 2 ta so oralig’idagi juft sonlar ye’g’indisini chiqaruvchi algaritm tuzing faqat 1 son 2 son dan kichikligini tekshiring

let num1 = +prompt("son kiriting")
let num2 = +prompt("son kiriting")

function nam(a, b) {
    let res = 0;
    res = Math.abs(a - b);
    let result = 0;
    for (let i = 0; i <= res ; i++){
        if (i % 2 == 0){
       result += i;
        }
    }
    return result;

}
console.log(nam(num1 , num2));

//  4. function argument tiga berilgan qiymatlar orasida faqat number larni alohida array ga ko'chiring va return qiling
function number(...params){
    let arr = [] ;
    for(let i = 0; i <params.length; i++){
        if(typeof params[i] === "number"){
            arr.push(params[i])
        }
    }
    return arr;
}
console.log(number(true ,1 , 2 ,"son"));

// 5. argument sifatida berilgan object ni value larinidan tashkil topgan array ni qaytaradigan function yarating
function numObjects(objects){
    let values = Object.values(objects);
    return values
}
console.log(numObjects({arow: 25, name : 25, folsname: 58}));

// 6. argument sifatida berilgan object ni key larinidan tashkil topgan array ni qaytaradigan function yarating
 function numObjects(objects){
        let values = Object.keys(objects);
        return values
    }
    console.log(numObjects({arow: 25, name : 25, folsname: 58}));

// 7. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin.

let numbers = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
function numberST(nums){
    let n = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 4){
           n.push(nums[i])
        }
    }
    return n
}
console.log(numberST(numbers));

//  8. Ixtiyoriy object yaratilsin key va value lari 6 tadan kam bo'lmasin 1. value lar ro'yxati chiqarilsin 2. value larining yig'indisi topilsin
let arr = {
  name: 12,
  mein: 2,
  folsname: 1,
  number: 5,
  lend: 9,
};
function numObj(obj) {
  let values = Object.values(arr);
  let res = 0;
  for (let i = 0; i < values.length; i++) {
    res += values[i];
  }
  return res;
}
console.log(numObj(arr))
