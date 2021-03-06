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
    const headerTitle = $('.banner-title');
    headerTitle.text(' gallery');
    const linkAPI = $('<a>', {
      class: 'link',
      href: 'https://api.nasa.gov/index.html',
      target: '_blank',
      text: 'NASA API'
    });
    headerTitle.prepend(linkAPI);
    $('.banner-subtitle').text(nasaData.title);
    $('.banner-subtitle').text(nasaData.title);
    $('.banner-content').text(nasaData.explanation);
  };

  loadNasa() {
    $.ajax({
      url: this.urlNasa
    }).done(response => {
      console.log(response);
      $('.banner-progress').show();
      this.getNasaData(response);
      $('.banner-progress').hide();
    }).fail(error => {
      console.log(error);
    });
  };
}


