import { colors } from "../../styles/theme";
import GitHub from "../Icons/Github";

export default function Button({ children, onClick }) {

    return(
        <>
            <button
                onClick={ onClick }
            >
                <GitHub fill={"#fff"} width={ 24 } height={ 24 }/>
                { children }
            </button>

            <style jsx>{`
                button {
                    align-items: center;
                    background-color: ${ colors.black };
                    border-radius: 9999px; 
                    border: 0;
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    fonst-size: 16px;
                    font-weight: 800;
                    padding: 8px 24px;
                    transition: opacity .3s ease;
                }

                button > :global(svg) {
                    margin-right: 8px;
                }

                button:hover {
                    opacity: .7;
                }
            `}</style>  
        </>
    )
}