

//  Fetch the current date and update it in the DOM
var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

$(document).ready(function(){

        $("#date").html(display_date)
    
})

    //  write an event, when Submit button is clicked
$(function () {

    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let input_data = {
            "text": $("#text").val()
        }

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        //let input_text = {'customer' : text_value}
        //console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',
            url: "/predict",

            //  Data to be sent in JSON format
            data : JSON.stringify(input_data),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                predicted_emotion = result.prediction
                emo_url = result.url

                
                // Display Result Using JavaScript----->HTML
                $("#sentiment").html(predicted_emotion)
                $('#sentiment').css("display", "block");

                $("#emoji").attr('src', emo_url);
                $('#emoji').css("display", "block");

                //  update the DOM elements


                //  show them

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
})
