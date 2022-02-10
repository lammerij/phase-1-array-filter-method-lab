// const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];ƒ

function findMatching(drivers, name) {
  console.log(drivers, name);
  return drivers.filter(
    (driver) => driver.toUpperCase() === name.toUpperCase()
  );
}

function fuzzyMatch(drivers, letters) {
  console.log(drivers, letters);
  return drivers.filter(
    (name) => name.substring(0, 2).toLowerCase() === letters.toLowerCase()
  );
}

function matchName(drivers, name) {
  console.log(drivers, name);
  return drivers.filter((driver) => driver.name === name);
}
