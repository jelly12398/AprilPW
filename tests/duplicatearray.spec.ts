import { test, expect } from '@playwright/test';

test('Remove duplicates from array', async () => {
  const removed = (arr: number[]) => {
    const uniqueArray: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      let exist = false;

      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          exist = true;
          break;
        }
      }

      if (!exist) {
        uniqueArray.push(arr[i]);
      }
    }

    console.log(uniqueArray);
    //return uniqueArray;
  };

  //const result = 
  removed([1, 2, 4, 2, 1]);
  //expect(result).toEqual([1, 2, 4]);
});