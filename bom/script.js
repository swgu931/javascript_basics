<p>time : <span id="time"></span></p>
<input type="button" id="execute" value="execute" />
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
 $('#execute').click(function(){
 $.ajax({
 url:'./time.php',
 success:function(data){
 $('#time').append(data);
 }
 })
 })
</script>