function foo() {
  throw new Error('Opops!!');
};

function bar() {
  foo();
};

function baz() {
  bar();
}

baz();
