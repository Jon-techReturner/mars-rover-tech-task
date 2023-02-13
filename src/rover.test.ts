import { run } from "./rover";

test("When executing a program", () => {
    const program = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];
    expect(run(program)).toEqual(["1 3 N", "5 1 E"]);
});

test("When moving west off the edge of the grid", () =>{
    const program = ["0 0", "0 0 W", "M"];
    expect(run(program)).toEqual(["F 0 0 W"]);
});
test("When moving south off the edge of the grid", () =>{
    const program = ["0 0", "0 0 S", "M"];
    expect(run(program)).toEqual(["F 0 0 S"]);
});
test("When moving north off the edge of the grid", () =>{
    const program = ["0 0", "0 0 N", "M"];
    expect(run(program)).toEqual(["F 0 0 N"]);
});
test("When moving east off the edge of the grid", () =>{
    const program = ["0 0", "0 0 E", "M"];
    expect(run(program)).toEqual(["F 0 0 E"]);
});
test("When moving east off the edge of the grid", () =>{
    const program = ["0 0", "0 0 N", "MLLM"];
    expect(run(program)).toEqual(["F 0 0 N"]);
});
