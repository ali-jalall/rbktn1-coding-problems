'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

// for (var func of tasks) {
//   results.push(func((res) => {results.push(res)}));
// }

// tasks is array of functions
// we need to take them one by one
// save the result in callback

// tasks = tasks[0];
// tasks.splice(0, 1);
// tasks((result) => {
  //   results.push(result);
  // })
  // asyncMap(tasks, callback);
  // if (tasks.length === 0) {
  //   callback(results);
  // }
  //   tasks.forEach((func) => {
  //       func((res) => {
  //          str = res;
  //       })
  //   })

  var asyncMap = function(tasks, callback) {
    var results = [];
    var str = '';
    
    // what i am trying to do is iterate over tasks
    for (var x = 0; x < tasks.length; x++) {
      // take each task
      var func = tasks[x];
      // invoke it
      func((res) => {
          // save the result of it in array
          results.push(res);    
      })
    }
    console.log(results)
  
    callback(results);
    
  };
