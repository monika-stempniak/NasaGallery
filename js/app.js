  // import modules
  import $ from 'jquery';
  import { NasaData } from './loadNasa';
  import { MarsData } from './loadMars';
  require('../css/style.scss');

$(() => {

  // variables
  const apiKey = 'fnNoKmHzREJJoo7DI4rX1HseOV8UinHXG34A5Pbp';
  const urlNasa = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const urlMars = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;
  const hiddenGallery = $('.gallery-content').last();

  // load Nasa data to banner section
  const nasaData = new NasaData(apiKey, urlNasa);
  nasaData.loadNasa();

  // load Mars images to gallery section
  const marsData = new MarsData(apiKey, urlMars);
  marsData.loadMars();


  // hide gallery photos
  hiddenGallery.hide();

  // show all gallery photos
  const showGallery = $('.gallery-btn').on('click', function(e){
    e.preventDefault();
    console.log('nananan');
    hiddenGallery.show();
    $(this).parent().hide();
  });


});