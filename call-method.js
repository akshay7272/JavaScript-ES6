// Object example for Call method

const user1 = {
  name: "Abhay Sharma",
  enemy: "Harjeet Singh",
  //   Detail: function () {
  //     // console.log(this);
  //     console.log(`My Best Funny Friend is : ${this.name}`);
  //   },
};
//Same thing calling method with outside a function
const Detail = function (state, country) {
  //   console.log(`My Best Funny Friend is : ${this.name}`);
  console.log(
    `My Best Funny Friend is : ${this.name} from ${state} and having country ${country}`
  );
  //   console.log(this); Points both objects
};

const user2 = {
  name: "Akshay Kumar",
  enemy: "Harjeet Singh",
};
// user1.Detail();
// using call method changing/accesing another user data in same object
// user1.Detail.call(user2);
// Detail.call(user1);
// Detail.call(user2);
// using Apply Method
Detail.call(user1, "Jammu", "India"); // using call ---> It uses simple argument passing
Detail.apply(user2, ["Himachal Pradesh", "India"]); // using apply--> it creates array of list to pass data
const newData = Detail.bind(user2, "Punjab", "India"); // using Bind--> it creates a copy of it and call when we need.
newData(); //--> calling copy of bind method.
//Same output.
