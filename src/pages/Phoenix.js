import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Phoenix = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Hello, welcome</h1>
                    <h3>You are authenticated</h3>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default Phoenix;