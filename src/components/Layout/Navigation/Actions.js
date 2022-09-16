import axios from "axios";
import React, { useState, useEffect } from "react";

const Actions = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get(`/api/view_all_users`).then((res) => {
            const users = res.data;
            setUserInfo(users);
        });
    }, []);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Vartotojo Vardas</th>
                        <th scope="col">Email</th>
                        <th scope="col">Rolė</th>
                        <th scope="col">Veiksmai</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user) => {
                        return (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role_id}</td>
                                <td className="buttons d-flex">
                                    <button>Prideti</button>
                                    <button>Istrinti</button>
                                    <button>Redaguoti</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Actions;
