//Clear input, grab input, and render sequence on the page with input number when the form is submitted
$('form').on('submit', function(e) {
  e.preventDefault();
  $('.tbody-class').empty();
  var upToNum = parseInt($('input').val());
  $('input').val('');
  calcFibonnaci(upToNum);
})

/**
 *  Calculates the fibonacci sequence
 *
 *  @param  {number} num number of sequences
 *  @return {N/A}     No return. Just renders it on the DOM with renderFibonacci function
 */
function calcFibonnaci(num) {

  //edge cases
  if (num === 1) {
    renderFibonacci(1, 0);
    return;
  }

  var sum = 1;
  var last = 0;
  var temp;

  renderFibonacci(1, 0);
  renderFibonacci(2, 1);

  for (var i = 3; i <= num; i++) {
      temp = last;
      last = sum;
      sum = sum + temp;
      renderFibonacci(i, sum);
  }
};

/**
 *  Renders fibonacci sequence on the DOM with table row and column HTML elements
 *
 *  @param  {number} seq   Sequence number in the fibonacci
 *  @param  {number} value Value of the fibonacci at the above sequence
 *  @return {N/A}       No return. Just renders it on the DOM.
 */
function renderFibonacci(seq, value) {
  var row = $('<tr></tr>');
  row.append( $('<td></td>').text(seq) );
  row.append( $('<td></td>').text(value) );
  $('.tbody-class').append(row);
}
