import { SignUp } from "@clerk/nextjs"

type SignUpProps = {
    searchParams: {
        redirectUrl: string
    }
}

export default function SignUpPage({ searchParams: {redirectUrl} }: SignUpProps) {
    return(
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <SignUp signInUrl="/signin" forceRedirectUrl={redirectUrl}/>
                </div>
            </div>
        </section>
    )
}