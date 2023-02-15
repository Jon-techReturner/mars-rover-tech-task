type Coordinates = {
    x: number,
    y: number
}
type Move = "L"|"R"|"M";
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
          console.log("invalid move")
      else
          console.log(`${currentPos.x} ${currentPos.y} ${face}`)
  }