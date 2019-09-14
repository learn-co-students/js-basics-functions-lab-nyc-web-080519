// Code your solution in this file!
const distanceFromHqInBlocks = (block) => Math.abs(42 - block);

const distanceFromHqInFeet = (blocks) => distanceFromHqInBlocks(blocks) * 264;

const distanceTravelledInFeet = (block1, block2) => Math.abs(block1 - block2) * 264;

// const calculatesFarePrice = (block1, block2) => {
//   const feet = distanceTravelledInFeet(block1, block2)
//   switch (feet) {
//     case feet <= 400:
//       return 0;
//     case feet > 400 && feet <= 2000:
//       return (feet - 400) * .02;
//     case feet > 2000 && feet <= 2500:
//       return 25;
//     default:
//       return 'cannot travel that far';
//   }
// };
// not sure why this didn't work

const calculatesFarePrice = (block1, block2) => {
  const feet = distanceTravelledInFeet(block1, block2)
  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * .02;
  } else if (feet > 2000 && feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
