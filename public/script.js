const input = document.querySelector("input");
const result = document.querySelector(".result");
const urlResult = document.querySelector(".result > code");

input.oninput = function() {
  if (
    /^https:\/\/github\.com\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/blob\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/
    .test(input.value)
  ) { // Github
    result.style = "";
    input.style = "background-color: green;";
    var matches = input.value.match(/^https:\/\/github\.com\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/blob\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/);
    urlResult.innerHTML = input.value.replace(
      /^https:\/\/github\.com\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/blob\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/,
      `https://${
      document.location.href.match(/^https:\/\/([a-zA-Z0-9%&?_\-+.]+)\//)[1]
      }/gh/${matches[1]}/${matches[2]}@${matches[3]}/${matches[4]}`
    )
  } else if (
    /^https:\/\/gitlab\.com\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/-\/blob\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/
    .test(input.value)
  ) { // Gitlab
    result.style = "";
    input.style = "background-color: green;";
    var matches = input.value.match(/^https:\/\/gitlab\.com\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/-\/blob\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/);
    urlResult.innerHTML = input.value.replace(
      /^https:\/\/gitlab\.com\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/-\/blob\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/,
      `https://${
      document.location.href.match(/^https:\/\/([a-zA-Z0-9%&?_\-+.]+)\//)[1]
      }/gh/${matches[1]}/${matches[2]}@${matches[3]}/${matches[4]}`
    )
  } else if (
    /^https:\/\/([a-zA-Z0-9%&?_\-.]+)\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/src\/branch\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/
    .test(input.value)
  ) { // Gitlab
    result.style = "";
    input.style = "background-color: green;";
    var matches = input.value.match(/^https:\/\/([a-zA-Z0-9%&?_\-.]+)\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/src\/branch\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/);
    urlResult.innerHTML = input.value.replace(
      /^https:\/\/([a-zA-Z0-9%&?_\-.]+)\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9.\-_]+)\/src\/branch\/([a-zA-Z0-9.\-_]+)\/([a-zA-Z0-9%&?_\-+./]+)$/,
      `https://${
      document.location.href.match(/^https:\/\/([a-zA-Z0-9%&?_\-+.]+)\//)[1]
      }/te@${matches[1]}/${matches[2]}/${matches[3]}@${matches[4]}/${matches[5]}`
    )
  } else {
    result.style = "display: none;";
    input.style = "background-color: red;";
  }
}