import Header from "../Header";
import Signup from "../SignUp";


export default function SignupPage(){
    return(
        <>
        <div className="min-h-full h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
            </div>
            </div>
        </>
    )
}