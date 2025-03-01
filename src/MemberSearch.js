import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 추가

const MemberSearch = () => {
    const [memberId, setMemberId] = useState(""); // 입력한 ID
    const [member, setMember] = useState(null); // 조회된 회원 정보
    const [error, setError] = useState(""); // 에러 메시지

    const handleSearch = () => {
        if (!memberId) {
            setError("회원 ID를 입력하세요.");
            return;
        }

        axios.get(`http://localhost:8080/api/v1/members/${memberId}`)
            .then(response => {
                setMember(response.data);
                setError(""); // 에러 초기화
            })
            .catch(() => {
                setMember(null);
                setError("해당 ID의 회원을 찾을 수 없습니다.");
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">회원 검색</h2>

            {/* 검색 입력창 */}
            <div className="input-group mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="회원 ID 입력"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    검색
                </button>
            </div>

            {/* 검색 결과 */}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            {member && (
                <div className="card shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">{member.name}</h5>
                        <p className="card-text text-muted">@{member.nickName}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemberSearch;
