jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "Veuillez entrez le nom Complet");
jQuery.validator.addMethod("validEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Veuillez saisir une adresse e-mail valide !");
$.validator.addMethod( "validPassword", function( value, element ) {
    return this.optional(element) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i.test(value);
},"Vous devez obligatoirement mettre un caractére spécial");

var $registrationForm = $('#registration');
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
          //nomComplet is the name of the textbox
          nomComplet: {
              required: true,
          },
          email: {
              required: true,
              validEmail: true
          },
          password: {
              required: true,
              validPassword: true,
              minlength: 10
          },
          comfirmPassword: {
              required: true,
              equalTo: '#password'
          }
      },
      messages:{
        nomComplet: {
              //message d'erreur pour le champ obligatoire
              required: 'Veuillez entrer le nom Complet!'
          },
          email: {
              required: 'Veuillez entrer l\'émail!',
              //message d'erreur pour l'email obligatoire
              email: 'Veuillez entrer un email valide!'
          },
          password: {
              required: 'Veuillez entrer le mot de passe!'
          },
          comfirmPassword: {
              required: 'Veuillez entrer le confimation de mot de passe!',
              equalTo: 'Veuillez entrer le même mot de passe!'
          }
      },
      errorPlacement: function(error, element) 
      {
        
        error.insertAfter( element ); 
      }
  });
}