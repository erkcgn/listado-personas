import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import * as firebase from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as firebase from "firebase/auth";
import { signOut } from "firebase/auth";

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

    isAutenticado(){
        return this.token != null;
    }

    logout(){
        const auth = getAuth();
        
        signOut(auth).then(() => {
            this.token = "";
            this.router.navigate(['login']);
        }).catch((error) => {
            console.log("error logout:" + error)
        });
        // firebase.auth().signOut()
        // .then(() => {
        //     this.token = "";
        //     this.router.navigate(['login']);
        // }).catch((error) => console.log("error logout:" + error));
    }
}