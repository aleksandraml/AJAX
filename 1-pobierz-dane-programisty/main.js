// https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php


$(document).ready(function () {
    let dataDiv = $('<div id ="dane-programisty"></div>')
    $('.paragraph').after(dataDiv);
    $('.dane').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            // let developer = 0; 
        // let developerData = $('.wynik');
        dataDiv.append("<p>Name: " + data.imie + "</p>");
        dataDiv.append("<p>Last name: " + data.nazwisko + "</p>");
        dataDiv.append("<p>Profession: " + data.zawod + "</p>");
        dataDiv.append("<p>Company: " + data.firma + "</p>");
            
            // $("#developer").text(developer);
        })
    })
});




