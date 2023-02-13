# Mars Rover Tech Task 
## Pyramid Diagram / UML
! [Pyramid Diagram](./media/Pryamid%20Diagram-Mars%20Rover.pdf);


## Know / Understand the Problem:
+ List of all functions
+ Understanding the rules of Directions (N, E, S, W)
    -   How the Rovers rotate
        #### Turning Left      
        - N => W,
        - W => S,
        - S => E,
        - S => E,
        - E => N
        #### Turning Right
        - N => E,
        - E => S,
        - S => W,
        - W => N
+ Undestanding the X and Y Coordinates
+ Read/Review what & how the Rovers works / what is Plateau
+ Understand/Review/Divide the Brief

## How the Mars Rover Works
+   ### Rovers Instruction
    - L > Rovers 90 degree left w/o moving from the current coordinate points
    - R > Rovers 90 degree Right w/o moving from the current coordinate points
    - M > Move forward by one grid point, maintaining the same heading(orientation)
+   ### Plateau
    -   Assume that the Square directly North from (x,y) is (X,y + 1)
    -   Assume that the Square directly East from (x,y) is (x + 1, y)
    -   Assume that the Square directly South from (x,y) is (x, y - 1)
    -   Assume that the Square directly West from (x,y) is (x - 1, y)

## Understand the INPUTS into the App
+   ### First Line Input
    -   5 5 > represents the upper-right coordinate of the Plateau
            > this Plateau has max(x,y) coordinates
    -   0 0 > assume that the lower-left coordinates
    -  1 2 N > Input to Rover
        +  Two Integers (1,2) -> represents (x,y) coordinates
        +   a letter (N) -> represent where the Rover facing
+   ### Second Line Input
    -   LMLMLMLMM  > letters (L, R, M) represents the instructions to move the Rover around the Plateau

### Example Test Case
####    Lines of Input to the Program:
    Input:                                     Expected Output:     
    First Test                                  1 3 N
        5 5
        1 2 N
        LMLMLMLMM
    Second Test                                 5 1 E
        3 3 E
        MMRMMRMRRM

### Movement Rules 
    ** Rovers move sequentially **
    -- the first Rover needs to finish moving first before the next one can move --







