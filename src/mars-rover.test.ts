type Heading = "N" | "W" | "S" | "E";
const Compass : Array<Heading> = ["N", "E", "S", "W"];

const rotate = (turns: number) => (heading: Heading) => {
    const idx = Compass.indexOf(heading);
    return Compass[(idx + turns) % 4]
}
const turnLeft = rotate(3);
const turnRight = rotate(1);

test.each`
original | expected
${"N"}   | ${"W"}
${"W"}   | ${"S"}
${"S"}   | ${"E"}
${"E"}   | ${"N"}
`(
    "When facing $original, turning left should cause us to face $expected",
    ({ original, expected}) => expect(turnLeft(original)).toBe(expected)
);
test.each`
original | expected
${"N"}   | ${"E"}
${"E"}   | ${"S"}
${"S"}   | ${"W"}
${"W"}   | ${"N"}
`(
    "When facing $original, turning right should cause us to face $expected",
    ({ original, expected}) => expect(turnRight(original)).toBe(expected)
);
