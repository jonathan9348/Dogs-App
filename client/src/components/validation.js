export default function validation(input) {
    let errors = {};
  
    if (input.name.length < 3) {
      errors.name = "The name is too short";
    }
    else if (!input.weightMin) {
      errors.weightMin = "You need to put a minimum weight";
    }
    else if (!input.weightMax) {
      errors.weightMax = "You need to put a maximum weight";
    }
    else if (!input.heightMin) {
      errors.heightMin = "You need to put a minimum height";
    }
    else if (!input.heightMax) {
      errors.heightMax = "You need to put a maximum height";
    }
  
    return errors;
  }