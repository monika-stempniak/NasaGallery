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
      $('.banner-image').css("display", "none");
    }
    else {
      $(".banner-video").css("display", "none");
      $('.banner-image').attr("src", nasaData.url);
      $('.banner-image').attr("alt", nasaData.title);
    }

    $('.banner-subtitle').text(nasaData.title);
    $('.banner-content').text(nasaData.explanation);
  };

  loadNasa() {
    $.ajax({
      url: this.urlNasa
    }).done(response => {
      console.log(response);
      $('.progress').show();
      this.getNasaData(response);
      $('.progress').hide();
    }).fail(error => {
      console.log(error);
    });
  };
}


