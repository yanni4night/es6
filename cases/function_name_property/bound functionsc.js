
function foo() {};
return foo.bind({}).name === "bound foo" &&
  (function(){}).bind({}).name === "bound ";
      