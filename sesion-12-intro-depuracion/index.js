function fibonacci(num) {
    if (num === 0) {
      return [];
    } else if (num === 1) {
      return [1];
    } else if (num === 2) {
      return [1, 1];
    } else {
      let fibList = [1, 1];
      for (let i = 2; i < num; i++) {
        fibList.push(fibList[i - 2] + fibList[i - 1]);
      }
      return fibList;
    }
  }
  