export class AuthService {
    //fake service
    //in a real application, this might reach out to a server 
    //and allow us to login or log out 
    //and check the current authentication state

    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=> {resolve(this.loggedIn);}, 800);
            }
        );
        return promise;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}