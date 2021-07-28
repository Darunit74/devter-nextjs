
import Link from 'next/link';

const Timeline = ({ userName }) => {
    return (
        <>
            <h1>This is the timeline of { userName }</h1>
            <Link href="/">
                <a>Go home</a>
            </Link>
            <style jsx>{ `
                h1 {
                    font-size: 36px;
                    color: red;
                }
            ` }</style>
        </>
    );
}

Timeline.getInitialProps = async () => {

    const resp = await fetch('http://localhost:3000/api/hello');
    const data = await resp.json();

    return data;
}
 
export default Timeline;