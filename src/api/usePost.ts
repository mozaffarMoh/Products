import React from "react";
import postApi from "./postApi";
import { useNavigate } from "react-router-dom";

const usePost = (endPoint: string, body: Object) => {
    const navigate = useNavigate()
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const handlePost = () => {
        setLoading(true)
        postApi.post(endPoint, body).then((res) => {
            setLoading(false)
            setData(res.data)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                if (location.pathname.includes('login')) {
                    navigate('/')
                }
            }, 3000);
        }).catch((err) => {
            setLoading(false);
            setErrorMessage(err.response.data.detail);
            setTimeout(() => {
                setErrorMessage("")
            }, 4000);
        })
    }
    return [handlePost, loading, success, errorMessage, data]
}

export default usePost;