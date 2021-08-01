
import { loginWithGithub, onAuthStateChange } from '../firebase/client';

import Button from '../components/Button';
import { colors } from '../styles/theme';
import { useEffect, useState } from 'react';

export default function Home() {

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChange(setUser);
    }, []);

    const handleLoginWithGitHub = () => {
        loginWithGithub().then(user => {
            const { avatar, username, blog } = user;
            setUser(user);

        }).catch(err => err);
    }

    return (
        <>
            <section>
                <img src="/devter-logo.png" alt="Logo" />
                <h1>Devter</h1>
                <h2>Talk about development <br />with developers</h2>

                <div>
                    {
                        user === null &&
                        (
                            <Button onClick={handleLoginWithGitHub}>
                                Login with with GitHub
                            </Button>
                        )
                    }
                    {
                        user && user.avatar &&
                        (
                            <div>
                                <img src={user.avatar} alt="User avatar" />
                                <strong>{user.username}</strong>
                            </div>
                        )
                    }
                </div>

            </section>

            <style jsx>{`
                img {
                    width: 120px;
                }

                div {
                    margin-top: 10px;
                }

                section {
                    display: grid;
                    height: 100%;
                    place-content: center;
                    place-items: center;
                }

                h1 {
                    color: ${colors.primary};
                    font-weight: 800;
                    margin-bottom: 16px;
                }

                h2 {
                    color: ${colors.secondary};
                    font-size: 21px;
                    margin: 0;
                    text-align: center;
                }
            `}</style>
        </>

    )
}
