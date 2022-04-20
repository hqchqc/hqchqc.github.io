{
  const [a, b, [c, d, [e]]] = [1, 2, [3, 4, [5]]];
  console.log(a, b, c, d, e);

  let [, , third] = ["one", "two", "three"];
  console.log(third);

  let [head, ...tail] = [1, 2, 3, 4, 5];
  console.log(head, tail);
}

{
  let [head, center, ...tail] = ["one"];
  console.log(head, center, tail);
}

{
  let [a, [b], c] = [1, [2, 3, 4, 5], 6];
  console.log(a, b, c);
}

{
  // let [a] = {};
  // console.log(a);
  // iterator
}

{
  let [a, b, c] = new Set(["a", "b", "c"]);
  console.log(a, b, c);
}

{
  let [a, b = "hahaha"] = [1, null];
  console.log(a, b);
}

{
  let [x = 1, y = x] = [];
  console.log(x, y);
}

{
  let { foo, bar } = {
    bar: "ss",
    foo: "morenzhi",
  };
  console.log(foo, bar);
}
{
  let { log } = console;
  log(123, "hahaha");
}
