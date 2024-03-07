import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Phoenix = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Successful Authentication, follow the link below to your app</h1>
                    <h3>https://main.d1vgowrgpfqwtj.amplifyapp.com/</h3>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default Phoenix;