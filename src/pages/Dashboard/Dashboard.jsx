import React from 'react'
import styles from "./Dashboard.module.css"

import {Link} from "react-router-dom"

import { useAuthValue } from "../../contexts/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
    const {user} = useAuthValue()
    const uid = user.uid
    

    return (
        <div>
            <h1>
            </h1>
        </div>
    )
}

export default Dashboard