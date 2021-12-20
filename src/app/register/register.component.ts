import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;

  user: User = {}
  errorMail = "";
  errorPseudo = "";
  errorPwd = "";
  errorLastName = "";
  errorFirstName = "";
  errorPhone = "";
  errorBirthday = "";
  errorStreet = "";
  errorNumber = "";
  errorCity = "";
  errorPostalCode = "";
  errorCountry = "";
  errorOther = "";

  regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
  regexPseudo = new RegExp('^[a-zA-Z0-9\\-_]{5,25}$');
  regexPwd = new RegExp('^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,50})$');
  regexName = new RegExp('^[a-zA-Zéèëêïî\\-_]{2,25}$');
  regexPhone = new RegExp('^\\+\\d{11}$');
  regexBirthday = new RegExp('^\\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$');
  regexStreet = new RegExp('^[a-zA-Z\\s\\-éèêëàïôû]{5,30}$');
  regexNumber = new RegExp('^\\d{1,5}$');
  regexCity = new RegExp('^[a-zA-Z\\s\\-éèêëàïôû]{3,25}$');
  regexPostalCode = new RegExp('^\\d{1,6}$');
  regexCountry = new RegExp('^[a-zA-Z\\s\\-éèêëàïôû]{3,30}$');


  constructor(private api: UserService) { }

  ngOnInit(): void {
  }

  public initErrorMessages(){
    this.errorMail = "";
    this.errorPseudo = "";
    this.errorPwd = "";
    this.errorLastName = "";
    this.errorFirstName = "";
    this.errorPhone = "";
    this.errorBirthday = "";
    this.errorStreet = "";
    this.errorNumber = "";
    this.errorCity = "";
    this.errorPostalCode = "";
    this.errorCountry = "";
  }

  public registerUser(){  //TODO REGEX DES CHAMPS
    this.initErrorMessages()
    var error = 0
    this.user.Birthday = this.user.Birthday?.split('-').join('')

    if(this.user.Mail == null || !this.regexMail.test(this.user.Mail!)){
      this.errorMail = "Mail invalide"
      error++
    }

    if(this.user.Username == null || !this.regexPseudo.test(this.user.Username!)){
      this.errorPseudo = "Pseudo invalide"
      error++
    }
    if(this.user.Password == null || !this.regexPwd.test(this.user.Password!)){
      this.errorPwd = "Mot de passe invalide"
      error++
    }
    if(this.user.LastName == null || !this.regexName.test(this.user.LastName!)){
      this.errorLastName = "Nom invalide"
      error++
    }

    if(this.user.FirstName == null || !this.regexName.test(this.user.FirstName!)){
      this.errorFirstName = "Prénom invalide"
      error++
    }

    if(this.user.PhoneNumber == null || !this.regexPhone.test(this.user.PhoneNumber!)){
      this.errorPhone = "Numéro de téléphone invalide"
      error++
    }

    if(this.user.Birthday == null || !this.regexBirthday.test(this.user.Birthday!)){
      this.errorBirthday = "Date de naissance invalide"
      error++
    }

    if(this.user.Add_street == null || !this.regexStreet.test(this.user.Add_street!)){
      this.errorStreet = "Rue invalide"
      error++
    }

    if(this.user.Add_number == null || !this.regexNumber.test(this.user.Add_number!)){
      this.errorNumber = "Numéro de rue invalide"
      error++
    }

    if(this.user.Add_locality == null || !this.regexCity.test(this.user.Add_locality!)){
      this.errorCity = "Ville invalide"
      error++
    }

    if(this.user.Add_postalCode == null || !this.regexPostalCode.test(this.user.Add_postalCode!)){
      this.errorPostalCode = "Code postal invalide"
      error++
    }

    if(this.user.Add_country == null || !this.regexCountry.test(this.user.Add_country!)){
      this.errorCountry = "Pays invalide"
      error++
    }

    if(error == 0)
      this.api.addUser(this.user).subscribe(
        () => {this.closebutton.nativeElement.click()},
        error => {
          if(error.error[Object.keys(error.error)[0]] == "user.Mail is already set")
            this.errorMail = "Cette adresse mail existe déjà dans notre plateforme"
          if(error.error[Object.keys(error.error)[0]] == "user.Username is already set")
            this.errorPseudo = "Ce pseudo est déjà pris"

        }
      )

  }

}
