// ===================================OBJECT = {
//                                              [KEY]: VALUE,
//                                                  }==================================================
// =====================================================================================

// ===============================================
// const course = {
//   name: 'course',
//   part: 2,
//   date: '24/03/2022',
//   time: '17:00',
//   price: 300,
//   students: ['Kirill', 'Aleksey', 'Vlad', 'Maxim'],
// };
// ========================================= FOR IN (GET KEYS OF OBJECT)

// for (const key in course) {
//   // console.log(key, 'KEY');
//   console.log(course[key], 'VALUE');
//   // course[key] = course[key] + '1'
// }
// console.log(course)
// ============================================================================= ARRAY METHODS

// ========================================= FOR OF  (GET ITEMS FROM ARRAY)

// const testArray = ['1', {a: 1}, 'asd3', '4','5', 2, 4, 3];
//
// for (const val of testArray) {
//   console.log(val);
// }

// =============================================== SORT (ARRAY )

// const nameArray = ['Stas', 'Andrey', 'Valera', 'Styl', 'Dildo', 'Makaronik', 'Evrey'];
// const numberArray = [1,2,3,4,1,-1,-100,200];
// console.log(nameArray, 'not sort');
// const sortedArray = nameArray.sort();
// console.log(sortedArray, 'Names sort');
// numberArray.sort((a, b) => a - b);

// =============================================== REVERSE (ARRAY )

// const testArray = [4,2,1,0,10,14];
// console.log(testArray, 'no reverse');
// console.log(testArray.reverse(), 'reversed');

// ==================== EXAMPLE#1 __CREATE ARRAY WITH FIELDS FROM OBJECT
// const arrResult = [];
//
// for (const key in course) {
//   // const key = OUR KEY IN OBJECT
//   // FOR GET VALUE => get value by key from our object => Example:  course[key]
//
//   const test = {
//     [key]: course[key]
//   };
//
//   arrResult.push(test);
// }
// console.log(arrResult, 'result')
// =============================================================== CREATE DYNAMIC KEY [KEY]
// const key = prompt('enter key');
// const value = prompt('enter value');
//
// const test = {
//   [key]: value
// };
//
// console.log(test, 'new Object');

