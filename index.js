// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(logDriver)
}

function logDriversByHometown(drivers, hometown) {
  let matched = drivers.filter(function (driver) {
    return driver.hometown === hometown
  })

  matched.forEach(logDriver)
}

function driversByRevenue(drivers) {
  return sortDrivers(drivers.slice(), byRevenue)
}

function driversByName(drivers) {
  return sortDrivers(drivers.slice(), byName)
}

function logDriver(driver) {
  console.log(driver.name)
}

function byRevenue(driver1, driver2) {
  return driver1.revenue - driver2.revenue
}

function byName(driver1, driver2) {
  return driver1.name.localeCompare(driver2.name)
}

function sortDrivers(drivers, callback) {
  return drivers.sort(callback)
}

function totalRevenue(drivers) {
  return drivers.reduce(revenueSummer, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}

function revenueSummer(total, driver) {
  return total + driver.revenue
}