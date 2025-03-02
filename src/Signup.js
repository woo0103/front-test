import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        nickName: "",
        phone: "",
        birthDate: "",
    });
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(""); // 에러 상태
    const [success, setSuccess] = useState(""); // 성공 상태

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // 로딩 시작
        setError(""); // 에러 초기화
        setSuccess(""); // 성공 메시지 초기화

        // 서버로 데이터 전송
        axios
            .post("http://localhost:8080/api/v1/members", formData) // 백엔드 API 주소
            .then((response) => {
                setLoading(false); // 로딩 끝
                setSuccess("회원가입에 성공했습니다!"); // 성공 메시지
                console.log("회원가입 성공:", response.data);
                // 성공 후 추가 처리 (예: 로그인 페이지로 이동)
            })
            .catch((error) => {
                setLoading(false); // 로딩 끝
                setError("회원가입에 실패했습니다. 다시 시도해주세요."); // 에러 메시지
                console.error("회원가입 실패:", error);
            });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">회원가입</h2>
                <form onSubmit={handleSubmit}>
                    {/* 이름 입력 */}
                    <div className="mb-3">
                        <label className="form-label">이름</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 이메일 입력 */}
                    <div className="mb-3">
                        <label className="form-label">이메일</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 비밀번호 입력 */}
                    <div className="mb-3">
                        <label className="form-label">비밀번호</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 닉네임 입력 */}
                    <div className="mb-3">
                        <label className="form-label">닉네임</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nickName"
                            value={formData.nickName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* 전화번호 입력 */}
                    <div className="mb-3">
                        <label className="form-label">전화번호</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    {/* 생년월일 입력 */}
                    <div className="mb-3">
                        <label className="form-label">생년월일</label>
                        <input
                            type="date"
                            className="form-control"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                    </div>

                    {/* 에러 또는 성공 메시지 표시 */}
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}

                    {/* 회원가입 버튼 */}
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "회원가입 중..." : "회원가입"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
