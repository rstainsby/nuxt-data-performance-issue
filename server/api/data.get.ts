export default defineEventHandler(async (event) => {
  const result: number[][][] = new Array(100);

  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(100);
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = new Array(200);
      for (let k = 0; k < result[i][j].length; k++) {
        result[i][j][k] = Math.random();
      }
    }
  }

  return result;
});
