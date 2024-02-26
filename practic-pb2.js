/*Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the name of your friends
b)Check if the length of each element is even, push elements
with even length to a new array and return the result*/

const filterFriendsByEvenLength = (friends) => {
  return friends.filter((friend) => friend.length % 5 === 0);
};

const myFriends = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
const friendsWithEvenLength = filterFriendsByEvenLength(myFriends);
console.log(friendsWithEvenLength); // Output: ['Alice', 'Charlie', 'Dave']
