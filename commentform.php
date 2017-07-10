<html>
  <body>
  <!-- Code is based on W3Schools PHP Forms-->
  I love hearing from you! Leave a comment with your name and email and I'll be sure to write you back! 

  <?php echo $_POST["name"];?>!<br>
  Email Address: <?php echo $_POST["email"];?><br>
  Comment: <?php echo $_POST["comment"];?>
  
  </body>
</html>