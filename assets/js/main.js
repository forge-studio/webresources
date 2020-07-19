// preloader of page
$(window).load(function () {
    $(".se-pre-con").delay(2500).fadeOut("slow");
});

// sidebar Load
$(function () {
    $("#sidebar").load("sidebar.html");
});

// header Load
$(function () {
    $("#header").load("header.html");
});

// capitalize string
String.prototype.capitalizeWords = function () {
    return this.split(" ").map(function (ele) {
        return ele[0].toUpperCase() + ele.slice(1).toLowerCase();
    }).join(" ");
};

// page title and heading load
$(function () {
    var top = location.pathname.substring(1);
    var str = top.substring(0, top.indexOf('.'));
    var res = str.split("-").join(' ');
    res = res.capitalizeWords();
    document.title = (res + " | Resosurces");
    document.getElementById("page-heading").innerHTML = res;
});

// Fetching sheet data
var top = location.pathname.substring(1);
var str = top.substring(0, top.indexOf('.'));
fetch(`https://api.sheetson.com/v2/sheets/${str}?limit=100`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer pwjlANuY1PJdZGHnIVZmCqiEytBBxpyrT4CL1qOksjWNm_lYFNwyhVee5ZA",
            "X-Spreadsheet-Id": "1_ArJuQAjviqZjRULc8NqOZ_f9gC-qmGKRmy9JIZYtew"
        }
    }).then(function (response) {
        return response.json();
    })
    .then(function (resourcesdata) {
        let html = '';

        resourcesdata.results.forEach(function (resourcesdata) {
            html += `
                          <tr>
                              <td class="border px-4 py-2"><a target="_blank" href="${resourcesdata.url}" class="block "> ${resourcesdata.platform} <ion-icon class="text-base text-blue-800" name="open-outline"></ion-icon> </a></td>
                              <td class="border px-4 py-2">${resourcesdata.description}</td>
                              <td class="border px-4 py-2"><span class="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">${resourcesdata.status}</span></td>
                            </tr>

              `;
        });
        document.getElementById('resources-data').innerHTML = html;
    })
    .catch(function (error) {
        console.log(error);
    })