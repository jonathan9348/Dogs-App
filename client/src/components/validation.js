export default function validation(input) {
    let errors = {};
  
    if (input.name.length < 3) {
      errors.name = "The name is too short";
    }
    if (!input.weightMin) {
      errors.weightMin = "You need to put a minimum weight";
    }
    if (!input.weightMax) {
      errors.weightMax = "You need to put a maximum weight";
    }
    if (!input.heightMin) {
      errors.heightMin = "You need to put a minimum height";
    }
    if (!input.heightMax) {
      errors.heightMax = "You need to put a maximum height";
    }
  
    return errors;
  }