const batteryBatches = [10, 20, 30, 40, 50]; // Example array of battery batches

// Calculate the total number of batteries using reduce()
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalBatteries); // Output the total number of batteries


