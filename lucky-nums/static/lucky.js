/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault()
    // URL search params 
    const params = {};
    params.name = $("#name").val()
    params.year = $("#year").val()
    params.email = $("#email").val()
    params.color = $("#color").val()
    
    const resp = await axios.post("/api/get-lucky-num", params);

    handleResponse(resp)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    clearAll()
    if(resp.data.errors){
    showErrors(resp)
        } else {
    showSuccess(resp)
  }
}

function showErrors(resp) {
    const { name, email, year, color } = resp.data.errors
    if(name) {   
        $('#name-err').text(name.join('. '))    
    }
    if(year) {
        $('#year-err').text(year.join('. '))
    }
    if(email) {
        $('#email-err').text(email.join('. '))
    }
    if(color) {
        $('#color-err').text(color.join('. '))
    } 
}

function clearAll() {
    $('#name-err').empty()      
    $('#year-err').empty()
    $('#email-err').empty()
    $('#color-err').empty()
    $('p').remove()

}

function showSuccess(resp) {
    clearAll()
    const { bdayFact, luckyNumber, luckyNumberFact, year } = resp.data
    $('<p>').text(`Your lucky number is ${luckyNumber}, ${luckyNumberFact}`).appendTo('body')
    $('<p>').text(`Your birth year ${year}, ${bdayFact}`).appendTo('body')
}


$("#lucky-form").on("submit", processForm);
