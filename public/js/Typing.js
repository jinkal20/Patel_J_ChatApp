
    var timer = 0;

    function reduceTimer() {
        timer = timer - 1;
        isTyping(true);
    }

    function isTyping(val) {
        if (val == 'true') {
            document.getElementById('typing_on').innerHTML = "User is typing...";
        } else {

            if (timer <= 0) {
                document.getElementById('typing_on').innerHTML = "No one is typing -blank space.";
            } else {
                setTimeout("reduceTimer();", 500);
            }
        }
    }

<label>
    <textarea onkeypress="isTyping('true'); timer=5;" onkeyup="isTyping('false')" name="textarea" id="textarea" cols="45" rows="5"></textarea>
</label>
