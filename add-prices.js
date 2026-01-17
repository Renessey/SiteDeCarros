import fs from 'fs';

function generatePrice(car) {
  const { year, origin, make, model } = car;
  const currentYear = 2024;
  const age = currentYear - year;

  // Base price multipliers by origin
  const originMultipliers = {
    'Brazilian': 1.0,
    'American': 1.2,
    'European': 2.0,
    'Chinese': 0.8,
    'Australian': 1.1
  };

  // Base price for a new car in 2024 (in BRL)
  let basePrice = 50000; // R$ 50,000

  // Adjust for age (depreciation)
  const depreciationRate = 0.05; // 5% per year
  basePrice *= Math.pow(1 - depreciationRate, age);

  // Adjust for origin
  basePrice *= originMultipliers[origin] || 1.0;

  // Adjust for luxury brands
  const luxuryMakes = ['BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Ferrari', 'Lamborghini', 'Bentley', 'Rolls-Royce', 'Aston Martin'];
  if (luxuryMakes.includes(make)) {
    basePrice *= 3.0;
  }

  // Adjust for specific models
  const premiumModels = ['Carrera GT', '488', 'Huracan', 'Ghost', 'DB11'];
  if (premiumModels.includes(model)) {
    basePrice *= 2.0;
  }

  // Add some randomness
  const variation = 0.8 + Math.random() * 0.4; // 80% to 120%
  basePrice *= variation;

  // Ensure minimum price
  basePrice = Math.max(basePrice, 5000);

  return Math.round(basePrice);
}

const cars = JSON.parse(fs.readFileSync('public/cars.json', 'utf8'));

cars.forEach(car => {
  car.price = generatePrice(car);
});

fs.writeFileSync('public/cars.json', JSON.stringify(cars, null, 2));
console.log('Added prices to cars.json');
