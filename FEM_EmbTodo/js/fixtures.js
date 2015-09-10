// This part isn't actually necessary. This is just to clear up console errors while we're making the app.
var Todos = Todos || {};
Todos.Todo = Todos.Todo || {};

Todos.Todo.FIXTURES = [ // Look for .FIXTURES when looking for fixture data b.c on fixture adapter
 {
   id: 1,
   val: 'Apples',
   completed: true
 },
 {
   id: 2,
   val: 'Bananas',
   completed: false
 },
 {
   id: 3,
   val: 'Pears',
   completed: false
 },
 {
  id: 4,
  val: 'Oranges',
  completed: true
 },
 {
  id: 5,
  val: 'Grapes',
  completed: false
 }
];