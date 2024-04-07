import ErrorRepository from '../ErrorRepository';



test('should ErrorRepository', () => {
  const result = new ErrorRepository([[1, "error1"], [2, "error2"], [3, "error3"]]);

  expect(result.translate(3)).toBe("error3");
});

test('should -Unknown error-', () => {
  const result = new ErrorRepository([[1, "error1"], [2, "error2"], [3, "error3"]]);
  result.add(4, "error4");

  expect(result.translate(4)).toBe("error4");
});

test('should -error4-', () => {
  const result = new ErrorRepository([[1, "error1"], [2, "error2"], [3, "error3"]]);
  result.add

  expect(result.translate(5)).toBe("Unknown error");
});


// error1.errors.set(4, "error4");

// export default class ErrorRepository {
//     constructor(code, description) {
//         this.errors = new Map([[1, "error1"], [2, "error2"], [3, "error3"]]);
//     }
    
//     translate(code) {
//       if (this.errors.has(code)) {
//         return this.errors.get(code);
//       }    
//     }
// }