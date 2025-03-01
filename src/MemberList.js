import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 추가

const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/members") // 백엔드 API 주소
            .then(response => {
                setMembers(response.data);
            })
            .catch(error => {
                console.error("데이터를 불러오는 중 오류 발생:", error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">회원 목록</h2>
            <div className="row">
                {members.map(member => (
                    <div key={member.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">{member.name}</h5>
                                <p className="card-text text-muted">@{member.nickName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberList;
