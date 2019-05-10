//Code Wars: The Maze Runner
//https://www.codewars.com/kata/58663693b359c4a6560001d6

/*Directions

You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves you should return Lost.
The maze will look like:
maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

With the following key:
0 = Safe place to walk
1 = Wall
2 = Start Point
3 = Finish Point

Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

Notes:
I liked this one.
I'd like to revise it to be a bit more streamlined.
 */



function mazeRunner(maze, directions) {
  for (var i=0; i < maze.length; i++){
    let coord = maze[i].findIndex(n => n===2);
    if (coord != -1){
      var y=i;
      var x=coord;
      break;
      }
    }
    
    for (let direct of directions) {
      switch(direct) {
        case "N": y--; break;
        case "E": x++; break;
        case "S": y++; break;
        case "W": x--; break;
      }
           
      if (!maze[y]) return "Dead";
      switch (maze[y][x]){
        case undefined:
        case 1: return "Dead";
        case 3: return "Finish";
        }
    }
    return "Lost";   
}
