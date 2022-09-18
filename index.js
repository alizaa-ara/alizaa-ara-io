if (green) {
  return 'Drive'
}

if (green) {
  return 'Drive'
} else if (orange) {
  return 'Slow Down'
}

if (green) {
  return 'Drive'
} else if (orange) {
  return 'Slow Down'
} else {
  // red lights would come here
  return 'Stop'
}

function trafficLights(color) {
  switch (color) {
    case green:
      return 'Drive'
    case orange:
      return 'Slow Down'
    case white:
      return 'Honk Horn'
    case purple:
      return 'Pull Over'
    default:
      return 'Stop'
  }

  return
}
