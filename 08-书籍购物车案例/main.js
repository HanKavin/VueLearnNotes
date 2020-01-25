const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《李白诗集》',
        data: '2015-03',
        price: 33.00,
        count: 1
      },
      {
        id: 2,
        name: '《贝多芬》',
        data: '2005-04',
        price: 78.00,
        count: 1
      },
      {
        id: 3,
        name: '《华容道》',
        data: '2015-09',
        price: 54.00,
        count: 1
      },
      {
        id: 4,
        name: '《金瓶梅》',
        data: '2019-01',
        price: 18.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(a) {
      this.books[a].count++;
    },
    decrement(a) {
      // if (this.books[a].count>1) {
      //   this.books[a].count--;
      // }
      this.books[a].count--;
    },
    removehandle(a) {
      this.books.splice(a, 1);
      console.log('哈哈哈哈哈哈哈哈哈哈');
    }
  },
  computed: {
    totalprice() {
      // let totalprice1 = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalprice += this.books[i].count * this.books[i].price;
      // }

      //for(let i in this.books) i=0,1,2,3

      // for (let item of this.books) {
      //   totalprice1 += item.price * item.count;
      // }
      // return totalprice1;


      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      },0);


    }
  },
  filters: {
    showprice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})


//先行了解
//编程范式：命令式编程、声明式编程（Vue）
//编程范式：面向对象编程（第一公民：对象）、函数式编程（第一公民：函数）
//高阶函数： filter map reduce


//需求：取出所有小于4的数字   将取出的数字乘以2   将处理的数字相加
const nums = [1.11, 2, 3, 4, 5];

//filter: 必须返回一个boolean值，true：将回调的n加入新的数组  false：过滤此次的n
let newNums = nums.filter(function (n) {
  return n < 4;
})
console.log(newNums);

//map:
let newNums2 = newNums.map(function (n) {
  return n * 2
})
console.log(newNums);

//reduce
//对数组中所有的内容进行汇总
//(preValue,n)
//0     1.11
//1.11  2
//3.11  3
//6.11  4
newNums2.reduce(function (preValue, n) {
  return preValue + n;
}, 0)