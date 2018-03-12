import $ from 'jquery';
import { NasaData } from './loadNasa';

export class MarsData extends NasaData {
  constructor(apiKey, url) {
    super(apiKey);
    this.urlMars = url;
  }

  getMarsPhotos(photos) {
    const cols = $('.col-3');
    cols.each(function(index) {
      const photo = photos[Math.floor(Math.random()*photos.length)];
      if (photo.id != $(this).data('id')) {
        $(this).css('background-image', `url(${photo.img_src})`);
        $(this).data('id', photo.id);
      }
    });
  };

  loadMars() {
    $.ajax({
      url: this.urlMars
    }).done(response => {
      // console.log(response.photos);
      $('.progress').show();
      this.getMarsPhotos(response.photos);
      $('.progress').hide();
    }).fail(error => {
      console.log(error);
    });
  };
}