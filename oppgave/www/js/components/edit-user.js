import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor() {
    super();
    this.msg = '';
  }

  static get styles() {
    return css`
      form {
        display: grid;
        grid-template-columns: 120px 200px;
        grid-gap: 5px;
        text-align: right;
      }
    `;
  }

 
  render() {
    return html `
       <div>
       <form method="POST">
        <input type="hidden" name="uid" id="uid" value="${this.user.uid}"> 

        <label for="uname">Brukernavn</label>
          <input type="text" name="uname" id="uname" value="${this.user.uname}"><br>

        <label for="firstName">Fornavn</label>
          <input type="text" name="firstName" id="firstName" value="${this.user.firstName}"><br>

        <label for="lastName">Etternavn</label>
          <input type="text" name="lastName" id="lastName" value="${this.user.lastName}"><br>

        <label for="oldpwd">Gamle passord</label>
          <input type="password" name="oldpwd" id="oldpwd"><br>

        <label for="nupwd">Nytt passord</label>
          <input type="password" name="nupwd" id="pwd"><br> 

        <input type="submit" @click=${this.updateUser} id="submitForm" name="edituser">Oppdater</input>
       </form> 
    </div> 
    `;
  }

    updateUser(e) {
    var newForm = new FormData(e.target.form);
    e.preventDefault()
    newForm.append("uid", this.user.uid)
    
    fetch('api/updateUser.php', {
     
        method: 'POST',
        body: dataForm
    
    }).then(res=>res.json())
      .then(data=>{
        
        if (data.status=='success') {
            console.log("Success, updated");
            } 
        
        else {    
            console.log("Not success, try tomorrow :)");
            }
      
        })
  
  }
  

  

}
customElements.define('edit-user', EditUser);
