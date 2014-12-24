
try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}
      