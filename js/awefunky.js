const printMe = (name) => {
  console.log(name);
};

const alertMe = (name) => {
  alert(name);
};

const writeCSV = (data, filename) => {
  let csv = Papa.unparse(data, {
    quotes: true,
    header: true,
    complete: function () {
      console.log(
        '%cawefunky.js line:13 "All Done"',
        "color: #26bfa5;",
        "All Done"
      );
    },
  });
  //   let blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  //   if (navigator.msSaveBlob) {
  //     // IE 10+

  //     navigator.msSaveBlob(blob, filename);
  //   } else {
  //     let link = document.createElement("a");
  //     if (link.download !== undefined) {
  //       // feature detection
  //       // Browsers that support HTML5 download attribute
  //       let url = URL.createObjectURL(blob);
  //       link.setAttribute("href", url);
  //       link.setAttribute("download", filename);
  //       link.style.visibility = "hidden";
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  return csv;
};

const writeJson = () => {
  Papa.parse("", {
    download: true,
    complete: function (results) {
      console.log(
        '%cawefunky.js line:13 "All Done"',
        "color: #26bfa5;",
        "All Done"
      );
      console.log(results);
    },
  });
};

export { printMe, alertMe, writeCSV, writeJson };
