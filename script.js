function expect(val) {
  return {
      toBe: function(expectedValue) {
          if (val === expectedValue) {
              return { value: true };
          } else {
              throw new Error("Not Equal");
          }
      },
      notToBe: function(expectedValue) {
          if (val !== expectedValue) {
              return { value: true };
          } else {
              throw new Error("Equal");
          }
      }
  };
}
try {
  console.log(expect(5).toBe(5)); // { value: true }
} catch (error) {
  console.error(error.message);
}

try {
  console.log(expect(5).toBe(null)); // Throws "Not Equal"
} catch (error) {
  console.error(error.message);
}

try {
  console.log(expect(5).notToBe(null)); // { value: true }
} catch (error) {
  console.error(error.message);
}

try {
  console.log(expect(5).notToBe(5)); // Throws "Equal"
} catch (error) {
  console.error(error.message);
}