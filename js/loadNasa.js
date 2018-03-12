import $ from 'jquery';

export class NasaData {
  constructor(apiKey, url) {
    this.apiKey = apiKey;
    this.urlNasa = url;
  }

  getNasaData(nasaData) {
    if("copyright" in nasaData) {
      $(".copyright").text(`Image Credits: ${nasaData.copyright}, ${nasaData.date}`);
    }
    else {
      $(".copyright").text(`Image Credits: Public Domain, ${nasaData.date}`);
    }

    if(nasaData.media_type == "video") {
      $(".banner-video").attr("src", nasaData.url);
      $('.banner').css('background-image', `url("")`);
    }
    else {
      $(".banner-video").css("display", "none");
      $('.banner').css('background-image', `url(${nasaData.url})`);
    }

    $('.banner-article .data').text(nasaData.date);
    $('.banner-subtitle').text(nasaData.title);
    $('.banner-content').text(nasaData.explanation);
  };

  loadNasa() {
    $.ajax({
      url: this.urlNasa
    }).done(response => {
      console.log(response);

      this.getNasaData(response);
    }).fail(error => {
      console.log(error);
    });
  };
}

