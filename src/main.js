import { memoryGame } from './memory-game';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//
$(document).ready(function() {
  $('#ping-pong-form').click(function(event) {
    event.preventDefault();

    var output = memoryGame();
    console.log(output);
});
});
