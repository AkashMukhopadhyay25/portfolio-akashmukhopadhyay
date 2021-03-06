import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import image from "./image5.png";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import {FaComment} from "react-icons/fa";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBDBvpbFPKEhfwGKQFiRgldW2aFCf_vo6o",
  authDomain: "portfolio-app-4d3c8.firebaseapp.com",
  projectId: "portfolio-app-4d3c8",
  storageBucket: "portfolio-app-4d3c8.appspot.com",
  messagingSenderId: "68573937169",
  appId: "1:68573937169:web:14acf0479a33ff0003fbb0"
});

const db = getFirestore();

class ContactMe extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          fields: {},
          errors: {},
        };
        this.state.fields["text"]="";
      }
    
      handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if (typeof fields["name"] !== "undefined") {
          if (!fields["name"].match(/^[a-zA-Z ]+$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
          }
        }
    
        //Email
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
        if (typeof fields["email"] !== "undefined") {
          let lastAtPos = fields["email"].lastIndexOf("@");
          let lastDotPos = fields["email"].lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              fields["email"].indexOf("@@") == -1 &&
              lastDotPos > 2 &&
              fields["email"].length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
          }
      
          if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]{10}$/)) {
              formIsValid = false;
              errors["phone"] = "A 10 digit number";
            }
          }
    
        this.setState({ errors: errors });
        return formIsValid;
      }

      async checkDb(){
        let fields = this.state.fields;
        const q1 = query(collection(db, "contact-info"), where("Email","==",fields["email"]));
        const q2 = query(collection(db, "contact-info"), where("Phone","==",fields["phone"]));
        const querySnapshot = await getDocs(q1);
        if(!querySnapshot.empty){
          console.log("Email found");
          return false;
        }
        const querySnapshot2 = await getDocs(q2);
        if(!querySnapshot2.empty){
          console.log("Phone number found");
          return false;
        }
        return true;
      }
    
      async contactSubmit(e) {
        e.preventDefault();
        let fields = this.state.fields;
        if (this.handleValidation()) {
          if(!(await this.checkDb())){
            alert("Document already present");
            window.location.reload();
            return;
          }
          alert("Form submitted");
          try {
            const docRef = await addDoc(collection(db, "contact-info"), {
              Name: fields["name"],
              Phone: fields["phone"],
              Email: fields["email"],
              Text: fields["text"]
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        } else {
          alert("Form has errors.");
        }
      }
    
      handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
      }

    render(){
    return (
        <div className="contact-me-background" id="contact-me">
                <div className="contact-me-form">
                    <h3><FaComment size="50"/>&nbsp;Contact Me</h3>
                    <form onSubmit={this.contactSubmit.bind(this)}>
                    <div className="form-group">
                            <label for="exampleInputEmail1" className="email-id">Name</label>
                            <input ref="name" type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" onChange={this.handleChange.bind(this, "name")}
                value={this.state.fields["name"]}/>
                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <br />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="email-id">Email-Id</label>
                            <input refs="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}/>
                            <small id="emailHelp" className="form-text text-muted">I promise it's safe with me.</small>
                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />

                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="email-id">Mobile No.</label>
                            <input refs="phone" type="phone" className="form-control" id="exampleInputPassword1" placeholder="**********" onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}
/>                      <span style={{ color: "red" }}>{this.state.errors["phone"]}</span><br/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1" className="email-id">Additional Details!</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChange.bind(this, "text")} value={this.state.fields["text"]} placeholder="Let's Connect."></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                    </form>
                </div>
                <img src={image}/>
        </div>
    );
}
}

export default ContactMe
