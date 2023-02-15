export const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  type Coordinates = {
      x: number,
      y: number
  }
  
  type Direction = "N"|"E"|"S"|"W";
  
  
  let plateau: Coordinates = {
      x: 0,
      y: 0
  };
  let currentPos: Coordinates;
  let face: Direction = "N";
  
  const Compass: Array<Direction> = ["N", "E", "S", "W"];
  
  export function setInitialPosition(x:number,y:number, direction: Direction): void {
      face = direction;
      currentPos = {
          x,
          y
      }
  }
  
  
  export function moveToDirection(): void {
      switch(face){
          case "N":
              currentPos.y++;
              break;
          case "E":
              currentPos.x++;
              break;
          case "S":
              currentPos.y--;
              break;
          case "W":
              currentPos.x--;
              break;
          default:
              console.log("Invalid Direction")
      }
  }
  
  export function rotate(turns: number): void {
      const idx = Compass.indexOf(face);
      face = Compass[(idx + turns) % 4];
  };
  
  export function setPlateau(x: number, y: number): void {
      plateau = {
          x,
          y
      };
  }
  
  type Move = "L"|"R"|"M";
  
  export function moveRover(move: any): void {
      const moves: Array<Move> = move.split("");
  
      moves.forEach(m => {
          switch(m) {
              case "L":
                  rotate(3);
                  break;
              case "R":
                  rotate(1);
                  break;
              case "M":
                  moveToDirection();
                  break;
              default:
              console.log("Invalid Move")
                  
          }
      });
      if(currentPos.x > plateau.x || currentPos.x < 0 || currentPos.y > plateau.y || currentPos.y < 0)
          console.log("Invalid move or You are at the edge of the Cliff")
      else
          console.log(`${currentPos.x} ${currentPos.y} ${face}`)
  }
  
  export const question1 = () => {
    return new Promise((resolve: Function) => {
      readline.question('How big is your plateau?', (plateauString: string) => {
          const splitString: string[] = plateauString.split(" ");
          setPlateau(Number(splitString[0]), Number(splitString[1]));
          resolve();
      });
    })
  }
  
  export const question2 = () => {
    return new Promise((resolve: Function) => {
      readline.question('What is your initial position?', (initialPos: any) => {
          const initialPosString: [string,string, Direction] = initialPos.split(" ");
          setInitialPosition(Number(initialPosString[0]), Number(initialPosString[1]), initialPosString[2]);
          resolve();
      });
    })
  }
  
  export const question3 = () => {
    return new Promise((resolve: Function) => {
      readline.question('What is your move?', (move: string) => {
          moveRover(move);
          readline.close();
          resolve();
      });
    })
  }