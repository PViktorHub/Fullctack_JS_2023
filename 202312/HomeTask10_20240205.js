//Task1
function randUser(gender) {
    const maleNames = [
      "Ivan", "Oleksandr", "Petro", "Mykola", "Dmytro", "Andrii", "Serhii", "Vitalii", "Volodymyr", "Oleh",
      "Yuriy", "Taras", "Roman", "Olexiy", "Bohdan", "Maksym", "Denys", "Ihor", "Yaroslav", "Oleksii",
      "Anatoliy", "Andriy", "Ostap", "Bogdan", "Anton", "Kyrylo", "Vadym", "Viktor", "Mikhail", "Artem",
      "Borys", "Ivan", "Vasyl", "Hryhoriy", "Yevhen", "Olexandr", "Ihor", "Oleksandr", "Oleksiy", "Vladyslav",
      "Volodymyr", "Yuriy", "Oleksandr", "Oleksii", "Taras", "Andriy", "Denys", "Maksym", "Roman", "Oleh"
    ];
  
    const femaleNames = [
      "Inna", "Olena", "Tetiana", "Iryna", "Natalia", "Anna", "Yulia", "Olha", "Olga", "Maria",
      "Kateryna", "Viktoria", "Ivanna", "Larysa", "Valentyna", "Liliya", "Alla", "Nadiia", "Yana", "Tamara",
      "Halyna", "Halyna", "Svitlana", "Ivanka", "Zoriana", "Lesia", "Oksana", "Nina", "Liudmyla", "Mariia",
      "Vira", "Bohdana", "Nataliia", "Dariia", "Nadiia", "Valeriia", "Valentyna", "Oksana", "Olha", "Olena",
      "Yuliia", "Lidiia", "Anastasiia", "Iryna", "Yevheniia", "Viktoria", "Iryna", "Olena", "Ivanna", "Olha"
    ];
  
    const names = (gender === 'male') ? maleNames : femaleNames;
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = Math.floor(Math.random() * 100) + 1;
  
    const userData = {
      name: randomName,
      age: randomAge,
      gender: gender,
      toString: function(){
         return `name: ${randomName}, age: ${randomAge}, gender: ${gender}`;
      }
    };
  
    return userData;
  }
  
  const maleUsers = Array.from({ length: 50 }, () => randUser('male'));
  const femaleUsers = Array.from({ length: 50 }, () => randUser('female'));
  
  console.log(maleUsers.map(x => x.toString()));  
  console.log(femaleUsers.map(x => x.toString()));  

//Task2
function repeatArray(arr, number) {
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
      console.error('Number should be a non-negative integer.');
      return null;
    }
  
    const repeatedArray = Array.from({ length: number }, () => [...arr]).flat();
  
    return repeatedArray;
  }

const inputArray = [1,3,2,1];
const repetitionFactor = 3;

const result = repeatArray(inputArray, repetitionFactor);
console.log(result);

//Task3
function findFastestAndSlowest(runners) {
    if (runners.length !== 6) {
      console.error('The input should contain exactly 6 runners.');
      return null;
    }
  
    let slowestRunner = runners[0];
    let fastestRunner = runners[0];
  
    for (let i = 1; i < runners.length; i++) {
      const currentRunner = runners[i];
  
      const currentRunnerAverage = calculateAverageRun(currentRunner.run);
  
      const slowestRunnerAverage = calculateAverageRun(slowestRunner.run);
      if (currentRunnerAverage > slowestRunnerAverage) {
        slowestRunner = currentRunner;
      }
  
      const fastestRunnerAverage = calculateAverageRun(fastestRunner.run);
      if (currentRunnerAverage < fastestRunnerAverage) {
        fastestRunner = currentRunner;
      }
    }
  
    return {
      slowestSurname: slowestRunner.surname,
      fastestSurname: fastestRunner.surname
    };
  }
  
  function calculateAverageRun(run) {
    return run.reduce((sum, time) => sum + time, 0) / run.length;
  }
  
  const runnersData = [
    { surname: 'Johnson', run: [10.5, 11.2, 10.8] },
    { surname: 'Smith', run: [10.8, 10.9, 10.7] },
    { surname: 'Williams', run: [11.2, 11.5, 11.0] },
    { surname: 'Jones', run: [10.9, 10.8, 10.6] },
    { surname: 'Brown', run: [11.5, 11.7, 11.2] },
    { surname: 'Davis', run: [11.0, 10.6, 10.5] }
  ];
  
  const res = findFastestAndSlowest(runnersData);
  console.log(res);

//Task4
function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
  
    const result = candies.map((kidCandies) => {
      return kidCandies + extraCandies >= maxCandies;
    });
  
    return result;
  }
  
  const candies = [2, 3, 5, 1, 3,];
  const extraCandies = 3;
  
  const resultArray = kidsWithCandies(candies, extraCandies);
  console.log(resultArray);


//Task5
function moveZeroes(nums) {
    let nonZeroIndex = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {

        [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
        nonZeroIndex++;
      }
    }
  }
  

  const nums = [0, 1, 0, 3, 0];
  moveZeroes(nums);
  console.log(nums); 