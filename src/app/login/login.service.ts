import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import * as firebase from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class LoginService{

    token: string;

    constructor(private router: Router){}

    login(email: string, password: string){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(
            response => {
                auth.currentUser?.getIdToken()
                    .then(
                        token => {
                            this.token = token;
                            this.router.navigate(['/']);
                        }
                    )
                console.log("response token: " + response.user.getIdToken());
                
            }
        )
        
        
    }

    getIdToken(){
        return this.token;
    }
}