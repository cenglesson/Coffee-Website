
import { useEffect, useState } from "react";
import Loading from "react-loading";
import '../App.css';
import Home from "./HomeView";

export default function LoadingPage() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

    const helloHandeler = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(!loading);
            setShow(!show);
        }, 2000);
    };

    if (loading) return <Loading />
        ;

    return (
        <div className="AppTwo">
            <div className="bodyContainer">
                {!show && <button onClick={helloHandeler}>Click me</button>}
                {show && <Home />}
            </div>
        </div>
    );
}
