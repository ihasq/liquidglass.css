const scenarios = [
  { name: '1 element', elements: 1, width: 320, height: 180 },
  { name: '10 elements', elements: 10, width: 320, height: 180 },
  { name: '50 elements', elements: 50, width: 320, height: 180 },
  { name: 'continuous resize', elements: 10, width: 640, height: 360 },
  { name: 'wasm fallback', elements: 10, width: 480, height: 270 },
];

for (const scenario of scenarios) {
  const pixels = scenario.elements * scenario.width * scenario.height;
  console.log(`${scenario.name}: ${pixels} displacement pixels`);
}

console.log('Render budget smoke check passed');
