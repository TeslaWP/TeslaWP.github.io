/* Script, that tell you days since the initial release of Hotline Miami game (October 23, 2012) */
/* Appears in scene 8 (the last one with red owl, or just go one to the left) */
/* Скрипт, который сообщает количество дней, прошедших с релиза игры (23 октября 2012) */
/* Используется в сцене №8 (последняя сцена с красной совой) */
const release = new Date();
const oneDay = 1000*60*60*24;
release.setFullYear(2012);release.setMonth(9);release.setDate(23);release.setHours(0, 0, 0);
/* putting the variable on window so it is accessible in other scripts (mainly changeScene.js) */
/* вешаем переменную на окно, чтобы она была доступна в других скриптах */
window.daysSinceRelease = Math.round((Date.now()-Date.parse(release))/oneDay)