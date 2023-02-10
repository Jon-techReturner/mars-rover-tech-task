const turnLeft = (x:string) => {
    if(x === "N") return "W";
    if(x === "W") return "S";
    if(x === "S") return "E";
    return "N";
};
const turnRight = (x:string) => {
    if(x === "N") return "E";
    if(x === "E") return "S";
    if(x === "S") return "W";
    return "N";
};

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
    "When facing $original, turning left should cause us to face $expected",
    ({ original, expected}) => expect(turnRight(original)).toBe(expected)
);
