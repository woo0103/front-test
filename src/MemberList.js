import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 추가

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null); // 선택된 멤버 상태

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/members") // 백엔드 API 주소
            .then(response => {
                setMembers(response.data);
            })
            .catch(error => {
                console.error("데이터를 불러오는 중 오류 발생:", error);
            });
    }, []);

    // 멤버 카드 클릭 시 선택된 멤버 세부 정보 설정
    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">회원 목록</h2>

            {/* 선택된 멤버의 세부 정보 표시 */}
            {selectedMember ? (
                <div className="mb-4">
                    <h3>세부 정보</h3>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{selectedMember.name}</h5>
                            <p className="card-text">닉네임: {selectedMember.nickName}</p>
                            <p className="card-text">이메일: {selectedMember.email}</p>
                            <p className="card-text">생년월일: {selectedMember.birthDate}</p>
                            <p className="card-text">전화번호: {selectedMember.phone}</p>
                        </div>
                    </div>
                    <button onClick={() => setSelectedMember(null)} className="btn btn-secondary mt-3">
                        목록으로 돌아가기
                    </button>
                </div>
            ) : (
                <div className="row">
                    {members.map(member => (
                        <div key={member.id} className="col-md-4 mb-4">
                            <div
                                className="card shadow-sm hover-effect"
                                onClick={() => handleMemberClick(member)}
                            >
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{member.name}</h5>
                                    <p className="card-text text-muted">@{member.nickName}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MemberList;
