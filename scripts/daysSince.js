const release = new Date();
const oneDay = 1000*60*60*24;
release.setFullYear(2012);release.setMonth(9);release.setDate(23);release.setHours(0, 0, 0);
window.daysSinceRelease = Math.round((Date.now()-Date.parse(release))/oneDay)