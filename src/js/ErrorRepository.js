export default class ErrorRepository {
    constructor() {
        this.errors = new Map([[1, "error1"], [2, "error2"], [3, "error3"]]);
    }
    
    translate(code) {
      if (this.errors.has(code)) {
        return this.errors.get(code);
      }  
      return "Unknown error";  
    }

    add(code, description) {
      this.errors.set(code, description);
    }
}