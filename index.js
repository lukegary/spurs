let url =
  "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=san_antonio_spurs";
const spursData = async () => await (await fetch(url)).json();
console.log(spursData().then((e) => console.log(e)));
