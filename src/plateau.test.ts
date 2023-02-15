import {moveRover} from './plateau';

test("Turning Left from North to West", () => {
    expect(moveRover("N")).toEqual("W");
});