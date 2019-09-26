
var queryURL = "https://www.eventbriteapi.com/v3/events/search//?categories=103&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";

// https://www.eventbriteapi.com/v3/users/me/events/?token=DNHTAISTPZBP2YMQRXIP

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        $("#events-div").empty();

        for (i = 0; i < 9; i++) {
            
            var cardWidth = $("<div>");
            cardWidth.addClass("col s12 m4");

            var card = $("<div>");
            card.addClass("card small");

            var cardImgDiv = $("<div>");
            cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

            var cardImg = $("<img>");
            cardImg.addClass("activator");
            cardImg.attr("src", response.events[i].logo.original.url);

            var cardContent = $("<div>");
            cardContent.addClass("card-content");

            var cardTitle = $("<span>");
            cardTitle.addClass("card-title activator grey-text text-darken-4");
            cardTitle.text(response.events[i].name.text);

            var cardIcon = $("<i>");
            cardIcon.addClass("material-icons right");
            cardIcon.text("more_vert");

            var cardLink = $("<p>");
            cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "See Event Details" + "</a>");
            
            var cardReveal = $("<div>");
            cardReveal.addClass("card-reveal");

            var cardRevealTitle = $("<span>");
            cardRevealTitle.addClass("card-title grey-text text-darken-4");
            cardRevealTitle.text("Event Info");

            var closeIcon = $("<i>");
            closeIcon.addClass("material-icons right");
            closeIcon.text("close");

            var eventInfo = $("<p>");
            eventInfo.html(response.events[i].description.html);
            console.log(response.events[i].description.html)





            $("#events-div").append(cardWidth);
            cardWidth.append(card);
            card.append(cardImgDiv);
            cardImgDiv.append(cardImg);
            card.append(cardContent);
            cardContent.append(cardTitle);
            cardTitle.append(cardIcon);
            cardContent.append(cardLink);

            card.append(cardReveal);
            cardReveal.append(cardRevealTitle);
            cardRevealTitle.append(closeIcon);
            cardReveal.append(eventInfo);



        };

  
     
    });