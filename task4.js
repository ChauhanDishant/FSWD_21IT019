function getMinMaxSalary(salaries) {
    // Check if the array is empty
    if (salaries.length === 0) {
      return "No salaries found!";
    }
  
    // Initialize variables for minimum and maximum salaries
    let minSalary = salaries[0];
    let maxSalary = salaries[0];
  
    // Iterate through the array to find the minimum and maximum salaries
    for (let i = 1; i < salaries.length; i++) {
      if (salaries[i] < minSalary) {
        minSalary = salaries[i];
      }
      if (salaries[i] > maxSalary) {
        maxSalary = salaries[i];
      }
    }
  
    // Return an object with the min and max salaries
    return {
      min: minSalary,
      max: maxSalary
    };
  }
  
  // Example usage
  const salaries = [50000, 60000, 45000, 80000, 70000];
  const result = getMinMaxSalary(salaries);
  console.log(result); // { min: 45000, max: 80000 }
  