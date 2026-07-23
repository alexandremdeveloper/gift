export const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const positions = [
{ x: -320, y: -80, rotate: -25 },
{ x: -250, y: 120, rotate: 18 },
{ x: -170, y: -150, rotate: -12 },
{ x: -80, y: 170, rotate: 22 },
{ x: 20, y: -110, rotate: -8 },
{ x: 120, y: 160, rotate: 14 },
{ x: 240, y: -60, rotate: -20 },
{ x: 320, y: 90, rotate: 17 },
{ x: -280, y: 240, rotate: -16 },
{ x: -40, y: 260, rotate: 8 },
{ x: 180, y: 250, rotate: -14 },
{ x: 300, y: 220, rotate: 12 },
{ x: -140, y: 40, rotate: -10 },
{ x: 80, y: 40, rotate: 6 },
{ x: 260, y: 20, rotate: -18 },
];